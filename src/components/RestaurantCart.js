
import { CDN_REST } from "./utils/constant";
const Rest=(props)=>{
    const {resData}=props;
    return(<div className="py-[7px] px-[8px] mx-1 w-[228px] border border-dotted border-black bg-sky-50 rounded-md text-left overflow-hidden text-ellipsis whitespace-nowrap " >
      <div className="diimage">
      <div className=" hover:font-bold" >
      <div id="m" className="border border-solid border-black rounded-md hover:w-52"> <img className="border border-solid border-white rounded-md hover:w-52" id="log"src={CDN_REST+resData.info.cloudinaryImageId} ></img></div>
        <h3 id="h"  ><b>{resData.info.name}</b></h3>
        <h3 id="n" >&#11088; {resData.info.avgRating} rating</h3>
        <h3 id="l" >	&#128690; {resData.info.sla.deliveryTime}mins</h3>
        <h3 >{resData.info.cuisines.join(',')}</h3>
  
        <h3 >{resData.info.costForTwo}</h3>
       
      </div>
      </div>
    </div>)
  }

  //HIGER OREDR COMPONENT

  export const Higherorderfx = (Rest) => {
    return (props) => {
      return (
        <div>
          <label className =" absolute  bg-black font-bold text-white ml-2  border border-dashed border-white rounded-lg " >promoted</label>
          <Rest {...props} />
        </div>
      );
    };
  };
  
  export default Rest;