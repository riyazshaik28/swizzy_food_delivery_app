import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shi from "./shimmer";
import { CDN_FOIN, CDN_INFO } from "./utils/constant";

const RestaurantMenu=()=>{


const {resId}=useParams();

     const [resInfo, setresInfo]=useState(null);
    useEffect(()=>{
        fetchdata();
    },[]
    );
    
        const fetchdata=async ()=>{
            const data= await fetch(CDN_INFO + resId + CDN_FOIN );

           const json=await data.json();
           console.log("fdghuiuytfdvbnjkjhgfc");
           console.log(json);
           
           setresInfo(json.data);
        };

     if (resInfo ===null){

        return(<Shi/>);
     }

     const{itemCards}= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

     console.log(itemCards);

    return(
       
        <div> 
            <h1>NAME OF THE RESTAURANTS</h1>
          <h2>{resInfo?.cards[2]?.card?.card?.info?.name|| <h2> the restarunt name is not found</h2>}</h2>
            <h1>cuisines</h1>

            <h1>{resInfo?.cards[2]?.card?.card?.info?.cuisines?.join(',')}</h1>

            <h1>MENU</h1>
            
               <h2>
            <ul>
             {itemCards.map((item) => (
                <li key= {item.card.info.id}>
                    {item.card.info.name} :    Rs   {item.card.info.price/100||item.card.info.defaultPrice/100}
                    </li>
                ))}
            </ul>
            </h2>
            <h1>avgRating:{resInfo?.cards[2]?.card.card.info.avgRating}</h1>
            </div>
    );
}
export default RestaurantMenu;