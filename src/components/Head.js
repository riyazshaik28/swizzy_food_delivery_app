import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CDN_LOGO } from "./utils/constant";
import useOnlineStatus from "./utils/useonlinestatus";
const Head = () => {
 
  const [btnName,setbtnName]=useState("login");

  
  useEffect(()=>{
    console.log("no dependience array");
   },[btnName]);

 const onlineStatus =useOnlineStatus();
  return (
    <div className="flex justify-between bg-slate-50  m-1 border border-solid border-black" > 
        <div className="logo container">
         <img id="logo" className="w-36" src={CDN_LOGO}></img>
        </div>
        <div className="navitems">
          <ul id="list" className="flex jusitfy-between   items-center  mr-6 ">
            <li  className="w-52 h-7 mb-7 mt-2 mr-8"id="mart"><a href="/mart" target="_main"><img id="marti" src="https://th.bing.com/th/id/OIP.upk2qGLEHlfrZIYPqCfTAgHaC9?w=306&h=139&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="instamart"/></a></li>
            <li className="px-2 mx-5  mt-8 py-1  bg-slate-100 border border-solid border-black text-center rounded-md"id="home"><Link to="/body" >&#x1F3E0;HOME</Link></li>
            <li className="px-2 mx-5  mt-8 py-1  bg-slate-100 border border-solid border-black text-center rounded-md"id="about"><Link to="/about">&#x1F465;ABOUTUS</Link> </li>
            <li className="px-2 mx-5 mt-8 py-1  bg-slate-100 border border-solid border-black text-center rounded-md"id="cart"><Link to="/cart">&#x1F6D2;CART</Link></li>
            <li className="px-2 mx-5 mt-8  py-1  bg-slate-100 border border-solid border-black text-center rounded-md"id="contact"> <Link to="/cont">&#x1F4DE;CONTACTUS</Link></li>
            <li className=" p-1 mt-8 border border-dotted rounded-full border-stone-600" >{onlineStatus ? "🟢":"🟠" }</li>
            <button className="px-2 mx-5 mt-8 py-1  bg-slate-100 border border-solid border-black rounded-md" onClick={()=>{
             btnName==="login"? setbtnName("logout"):setbtnName("login")
            }}>{btnName}</button>
          </ul>

        </div>
      </div>
  );
};

export default Head;