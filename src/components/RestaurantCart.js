
import { CDN_REST } from "./utils/constant";
const Rest=(props)=>{
    const {resData}=props;
    return(<div className="rest" >
      <div className="diimage">
      <div className="divimage" >
       <div id="m"> <img id="log"src={CDN_REST+resData.info.cloudinaryImageId} ></img></div>
        <h3 id="h"><b>{resData.info.name}</b></h3>
        <h3 id="n">&#11088; {resData.info.avgRating} rating</h3>
        <h3 id="l">	&#128690;  {resData.info.sla.deliveryTime}mins</h3>
        <h3>{resData.info.cuisines.join(',')}</h3>
  
        <h3>{resData.info.costForTwo}</h3>
        <h1></h1>
      </div>
      </div>
    </div>)
  }
  export default Rest;