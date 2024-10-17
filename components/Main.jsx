export default function Main(props) {
    const {data} = props
    return(
        <div className="imageContainer">
             <img src={data?.hdurl} className="bgImage" alt={data?.title || background-image}/>
        </div>
    )
}