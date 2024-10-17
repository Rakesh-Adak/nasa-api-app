import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import Footer from "../components/Footer";

function App() {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  function handleToggleModal() {
    setShowModal(!showModal);
  }

  useEffect(() => {
    async function fetchApiData() {
      const NASA_API = import.meta.env.VITE_NASA_API_KEY;
      const url =
        "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_API}`;

      const today = (new Date()).toDateString()
      const localKey = `NASA-${today}`
      if(localStorage.getItem(localKey)){
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData);
        console.log("Fetched from Local storage");
        return
      }
      localStorage.clear()
      
      try {
        const response = await fetch(url);
        const apiData = await response.json();
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData);
        console.log("Fetched from API");
        console.log("Data\n", apiData);
      } catch (error) {
        console.log(error.message);
      } 
    }
    fetchApiData();
  }, []);

  return (
    <>
      {data ? (
        <Main data={data}  />
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModal && (
        <Sidebar data={data} handleToggleModal={handleToggleModal} />
      )}
      {data && <Footer data={data} handleToggleModal={handleToggleModal} />}
    </>
  );
}

export default App;
