import { useDispatch } from "react-redux";
import { addItems } from "./utils/cartSlice";
import { CDN_REST } from "./utils/constant";
const ItemList= ({items,dummy}) => {
    console.log({items});

    const dispatch=useDispatch();

    const handleAddItems=(item)=>{

      dispatch(addItems(item));
    };
return(
<div >
   {items.map((item) => 
   (
   <div className="p-2 m-2 border-b-2 border-grey-200"
   key={item.card.info.id}>
<div className="flex justify-between items-center ">
   <div className="flex-1">

   <div className="font-bold text-left py-3">
   
   {item?.card?.info?.name}
</div>

  <div className="text-left   items-center "> ₹
  {(item?.card?.info?.price ? (item?.card?.info?.price / 100).toFixed(2) : (item?.card?.info?.defaultPrice / 100).toFixed(2))}
  
  <div className="text-left " >⭐
  {item?.card?.info?.ratings?.aggregatedRating?.rating 
  || '4.1'
  }</div>
  </div>
  <p className="text-xs text-left  overflow-hidden whitespace-normal">{item?.card?.info?.description}</p>
</div>
<div className="">
   <div>
<button className=" font-bold bg-white text-green-400 rounded-lg p-1 border w-[50px]  mt-[87px]  absolute hover:bg-gray-300" onClick={()=>handleAddItems(item)}>ADD</button>
<img src=
  {CDN_REST+item?.card?.info?.imageId} className="w-[120px] h-[120px]  rounded-lg "/>
 </div>
 </div>
 </div>



</div>

   ))}
</div>
);
}
export default ItemList;