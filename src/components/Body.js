
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rest, { Higherorderfx } from "./RestaurantCart";
import Shi from "./shimmer";
import useOnlineStatus from "./utils/useonlinestatus";
import { UserContext } from "./utils/usercontext";

const Body = ()=>{


  
  let [listOfRestaurant,setListOfRestaurant] = useState([ ]);
  let[filterr,setfilter]=useState([ ]);
  let  [ text,settext]=useState("");

  console.log("body is rendered",listOfRestaurant);
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
    return (<img  className="w-screen h-screen object-cover " src="https://forum.crowland.ro/uploads/monthly_2021_07/68b31495702d4b1947882ae602d4d2f1.gif.c9139a991f1e10fdd0a5f233e79e0c50.gif" alt="ghjknb"></img>);
  }
   
   if( filterr.length=== 0){
   return <Shi />;
   }
   
   const RestaurantPromoted = Higherorderfx(Rest);

   const {setuserName,logginuser}=useContext(UserContext);

    return( <><div className="body bg-stone-200">
      <div className="flex mt-[15px]">
        <div className="searchtext">
          <input type="text" placeholder="search here &#128269;" value={text} onChange={(e)=>{
            settext(e.target.value);
          }} className=" mx-3 p-1 border border-solid border-black bg-zinc-100 text-center rounded-[4px]  "></input>

          <button className="py-1 px-3    uppercase ml-6  bg-transparent border  border-solid border-black  bg-zinc-100 text-center rounded-md hover:bg-zinc-200 " 
          onClick={()=>{
           filterListOfRestaurant=listOfRestaurant.filter((res)=>
          res.info.name.toLowerCase().includes(text.toLowerCase()));
           setfilter(filterListOfRestaurant);
           
          }}> search</button>
        </div> 
      
        <button className="mx-14  ml-20 p-1 px-2 uppercase bg-zinc-100 border border-solid border-black rounded-md hover:bg-zinc-200" onClick={()=>{
         filterListOfRestaurant=listOfRestaurant.filter((res)=>
            res.info.avgRating>=4.4);
          setfilter(filterListOfRestaurant);

        }} >Top rated Restaurant</button>

<button className="mx-7 p-1 px-2 bg-zinc-100 border border-solid border-black rounded-md  hover:bg-zinc-200" onClick={()=>{
         filterListOfRestaurant=listOfRestaurant.filter((res1)=>
          res1.info.sla.deliveryTime<=30);
          setfilter(filterListOfRestaurant);

        }} >FAST DELIVERY</button> 
         <label  className="pt-2 pr-5">User Name</label>
          <input
            id="username"
            type="text"
            placeholder="Enter username"
            value={logginuser}
            onChange={(e)=>setuserName(e.target.value)}
            className="p-1 border border-solid border-black bg-zinc-100 text-center rounded-md"
          />

        </div>
      <div className=" flex flex-wrap py-[25px] "> 
     
        {
          filterr.map((rest)=>
            (
              <Link 
              className=""
              key={rest.info.id}
              to={"/restmenu/" + rest.info.id}
            >
            {/* if rating is gratter then 4.3 then add prompoting tag go restaurantcart */}
              {rest.info.avgRating >= 4.3 ? ( <RestaurantPromoted resData={rest} />
              ) : (
                <Rest resData={rest} />
              )}
            </Link>
            ))
          
        }
        </div>
        </div>
        
      
      
      



      
    <div className="flex flex-wrap  mt-10 max-w-full bg-orange-50 h-95 text-xs mx-1">
  
<div>
  <img  className="w-[200px] h-[200px]  mt-5 border border-solid border-black"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsXzCAKQr6cb-qpbMQQHisxWcZ9HE562ivAw&s"></img>
  <pre>© 2024 kepto Limited</pre>
</div>


    <div className=" mx-3 mt-0 ">
  <ul className="list-none space-y-2 p-4">
    <li className="text-xl ">Company</li>
    <li>About Us</li>
    <li>Kepto Corporate</li>
    <li>Careers</li>
    <li>Team</li>
    <li>Kepto One</li>
    <li>Kepto Instamart</li>
    <li>Kepto Dineout</li>
    <li>Kepto Genie</li>
    <li>Minis</li>
  </ul>
</div>

<div   className=" mx-3 mt-4 ">
  <ul className="list-none space-y-2">
    <li className="text-xl ">Contact us</li>
    <li>Help & Support</li>
    <li>Partner with us</li>
    <li>Ride with us</li>
  </ul>
</div>

<div  className=" mx-3   mt-4 ">
  <ul className="list-none space-y-2">
    <li  className="text-xl ">Legal</li>
    <li>Terms & Conditions</li>
    <li>Cookie Policy</li>
    <li>Privacy Policy</li>
  </ul>
</div>

<div className=" mx-3   mt-4 ">
  <h3 className="text-xl">Available in:</h3>
  <ul className="list-none space-y-2">
    <li>Bangalore</li>
    <li>Hyderabad</li>
    <li>Delhi</li>
    <li>Mumbai</li>
    <li>Pune</li>
  </ul>
  
  <button className=" h-[20px] w-[80px] border border-solid border-black rounded-e-sm "> 685 cities</button>
</div>
<div className=" mx-3   mt-4 ">
  <h4 className="text-xl ">Life at Swiggy</h4>
  <ul className="list-none space-y-2">
    <li>Explore with Swiggy</li>
    <li>Swiggy News</li>
    <li>Snackables</li>
  </ul>
</div>

<diV className="flex border border-solid border-black w-full h-20 bg-red-50 font-medium" >
   <p className="text-xl   ml-8 mt-5 text-black font-bold">For better experience ,download the kepto app Now</p>
   <img className="w-[200px] h-10 mt-5 ml-7" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWY6j7XTn2Sf7T-m20sTbYpwa-tt9y5bGntw&s"></img>
   <img className="w-[200px] h-10 mt-5 ml-7" src="https://cdn1.byjus.com/wp-content/uploads/2018/11/cbse/2016/12/16055302/Download_on_the_App_Store.png"></img>
</diV>

  </div>  </>
      );
}


export default Body;