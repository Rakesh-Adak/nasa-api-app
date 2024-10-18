export default function Sidebar(props) {
  const { handleToggleModal, data } = props;
  return (
    <div className="sidebar">
      <div className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>
          {data?.title}
          <button onClick={handleToggleModal}>
          <i className="fa-solid fa-x"></i>
          </button>
        </h2>
        <div className="descriptionContainer">
          <p className="descriptionTitle">{data?.date}</p>
          <p>{data?.explanation}</p>
        </div>
      </div>
    </div>
  );
}
