
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rest from "./RestaurantCart";
import Shi from "./shimmer";
import useOnlineStatus from "./utils/useonlinestatus";
const Body = ()=>{


  console.log("body is rendered");
  let [listOfRestaurant,setListOfRestaurant] = useState([ ]);
  let[filterr,setfilter]=useState([ ]);
  let  [ text,settext]=useState("");


   useEffect(()=>
    {fetchdata();},[]);

   const fetchdata= async()=>
   {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.543558&lng=78.4753197&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
   
   const json= await data.json();
   console.log(json);
   setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setfilter(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   }

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false){
    return (<img src="https://forum.crowland.ro/uploads/monthly_2021_07/68b31495702d4b1947882ae602d4d2f1.gif.c9139a991f1e10fdd0a5f233e79e0c50.gif" alt="ghjknb"></img>);
  }
   
   if( filterr.length=== 0){
   return <Shi />;
   }


    return(<div className="body">
      <div className="filter">
        <div className="searchtext">
          <input type="text"className="textbox" value={text} onChange={(e)=>{
            settext(e.target.value);
          }}></input>

          <button className="searbtn" 
          onClick={()=>{
           filterListOfRestaurant=listOfRestaurant.filter((res)=>
          res.info.name.toLowerCase().includes(text.toLowerCase()));
           setfilter(filterListOfRestaurant);
           
          }}> search</button>
        </div> 
      
        <button className="Button" onClick={()=>{
         filterListOfRestaurant=listOfRestaurant.filter((res)=>
            res.info.avgRating>=4.4);
          setfilter(filterListOfRestaurant);

        }} >Top rated Restaurant</button>

<button className="Button1" onClick={()=>{
         filterListOfRestaurant=listOfRestaurant.filter((res1)=>
          res1.info.sla.deliveryTime<=30);
          setfilter(filterListOfRestaurant);

        }} >FAST DELIVERY</button> 
        </div>
      <div className="rest-container">
     
        {
          filterr.map((rest)=>
            (
            <Link className="hhh"
               key={rest.info.id}
              to={"/restmenu/"+rest.info.id}> <Rest  resData ={rest} />
              
              </Link>))
          
        }
        </div>
        </div>);
}
export default Body;