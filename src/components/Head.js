import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CDN_LOGO } from "./utils/constant";
import useOnlineStatus from "./utils/useonlinestatus";
import { UserContext } from "./utils/usercontext";
const Head = () => {
 
  const [btnName,setBtnName]=useState("Login");

  const navigate = useNavigate();
  const { logginuser } = useContext(UserContext);

  console.log(logginuser);

  useEffect(()=>{
    console.log("no dependience array",btnName);
   },[btnName]);

const cartItems=useSelector((store)=>store.cart.items)

 const onlineStatus =useOnlineStatus();
  return (
    <div className="  bg-stone-200 flex justify-between bg-slate-50  m-1 border border-solid border-black" > 
        <div className="logo container">
         <img id="logo" className="w-36 hover:border border-solid border-black" src={CDN_LOGO}></img>
        </div>
        <div className="navitems">
          <ul id="list" className="flex jusitfy-between   items-center  mr-6 ">
            <li  className="w-52 h-7 mb-7 mt-2 mr-8 hover:w-56 border border-double border-pink rounded-2xl "id="mart"><a href="/mart" target="_main"><img id="marti" src="https://th.bing.com/th/id/OIP.upk2qGLEHlfrZIYPqCfTAgHaC9?w=306&h=139&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="instamart"/></a></li>
            <li className="px-2 mx-5  mt-8 py-1  bg-slate-100 border border-solid border-black text-center rounded-md hover:bg-slate-300"id="home"><Link to="/body" >&#x1F3E0;HOME</Link></li>
            <li className="px-2 mx-5  mt-8 py-1  bg-slate-100 border border-solid border-black text-center rounded-md  hover:bg-slate-300"id="about"><Link to="/about">&#x1F465;ABOUTUS</Link> </li>
            <li className="px-2 mx-5 mt-8 py-1  bg-slate-100 border border-solid border-black text-center rounded-md  hover:bg-slate-300 "id="cart"><Link to="/cart">&#x1F6D2;CART({cartItems.length} Items)</Link></li>
            <li className="px-2 mx-5 mt-8  py-1  bg-slate-100 border border-solid border-black text-center rounded-md  hover:bg-slate-300"id="contact"> <Link to="/contact">&#x1F4DE;CONTACTUS</Link></li>
            <li className=" p-1 mt-8 border border-dotted rounded-full border-stone-600" >{onlineStatus ? "🟢":"🟠" }</li>
            <button
      className="px-2 mx-5 mt-8 py-1 bg-slate-100 border border-solid border-black rounded-md hover:bg-slate-300"
      onClick={() => {
        setBtnName((prev) => (prev === "Login" ? "Logout" : "Login")); 
        navigate("/login");
      }}
    >
      {btnName}
    </button>
    <li className=" p-1 mt-8 border border-dotted rounded-full border-stone-600" >{logginuser}</li>
          </ul>

        </div>
      </div>
  );
};

export default Head;




 

  
    

