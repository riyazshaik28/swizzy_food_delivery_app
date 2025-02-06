import { useParams } from "react-router-dom";
import RestaurantCategories from "./RestaurantCategories";
import Shi from "./shimmer";
import useRestaurantMenu from "./utils/useRestaurantMenu";

const RestaurantMenu=()=>{


const {resId}=useParams();

const resInfo = useRestaurantMenu(resId);

   

     if (resInfo ===null){

        return(<Shi/>);
     }
     
     const{itemCards}= 
     resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    
     const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ); 

     
    return(
       <>
      <h2 className=" text-center justify-center font-bold text-2xl pt-4 mt-[15px]" >
  {resInfo?.cards[2]?.card?.card?.info?.name || 'The restaurant name is not found'}
</h2>
        <div className= " text-start justify-center   shadow-2xl  border-[10px] border-t-0 rounded-3xl w-7/12 m-auto mt-[10px]  "> 

 
          <h2 className="font-bold"> &#11088;{resInfo?.cards[2]?.card.card.info.avgRating} ({resInfo?.cards[2]?.card.card.info.totalRatingsString} )-  {resInfo?.cards[2]?.card.card.info.costForTwoMessage}</h2>
          
            <h1 className="underline text-red-500"> {resInfo?.cards[2]?.card?.card?.info?.cuisines?.join(',')} </h1>

            <h1 className="lowercase"> {resInfo?.cards[2]?.card.card.info.areaName}</h1>

            <h1 className="lowercase"> {resInfo?.cards[2]?.card.card.info.sla.slaString}</h1>
            <h1 className=""> {resInfo?.cards[2]?.card.card.info.sla.lastMileTravelString}</h1>
            
          
            </div>
                {/*  categories of accordions  */}
                <div className="text-center justify-center mt-10 ">
              {categories.map((category) => (
             <RestaurantCategories  data={category?.card?.card} />
              ))};
               </div>

            </>
    );
}
export default RestaurantMenu;