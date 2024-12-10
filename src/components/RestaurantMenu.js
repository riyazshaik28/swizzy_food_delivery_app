import { useParams } from "react-router-dom";
import Shi from "./shimmer";
import useRestaurantMenu from "./utils/useRestaurantMenu";

const RestaurantMenu=()=>{


const {resId}=useParams();

const resInfo = useRestaurantMenu(resId);

   

     if (resInfo ===null){

        return(<Shi/>);
     }

     const{itemCards}= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

     console.log(itemCards);

    return(
       
        <div> 
            <h1 className="font-bold">NAME OF THE RESTAURANTS</h1>
          <h2>{resInfo?.cards[2]?.card?.card?.info?.name|| <h2> the restarunt name is not found</h2>}</h2>
            <h1>cuisines</h1>

            <h1>{resInfo?.cards[2]?.card?.card?.info?.cuisines?.join(',')}</h1>

            <h1 className="font-bold">MENU</h1>
            
               <h2>
            <ul>
             {itemCards.map((item) => (
                <li className="font-bold" key= {item.card.info.id}>
                    {item.card.info.name} : Rs{item.card.info.price/100||item.card.info.defaultPrice/100}
                    </li>
                ))}
            </ul>
            </h2>
            <h1 className="font-bold">avgRating:{resInfo?.cards[2]?.card.card.info.avgRating}</h1>
            </div>
    );
}
export default RestaurantMenu;