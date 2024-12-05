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
    <div className="header">
        <div className="logo container">
         <img id="logo" src={CDN_LOGO}></img>
        </div>
        <div className="navitems">
          <ul id="list">
            <li id="mart"><a href="/mart" target="_main"><img id="marti" src="https://th.bing.com/th/id/OIP.upk2qGLEHlfrZIYPqCfTAgHaC9?w=306&h=139&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="instamart"/></a></li>
            <li id="home"><Link to="/body" >&#x1F3E0;HOME</Link></li>
            <li id="about"><Link to="/about">&#x1F465;ABOUTUS</Link> </li>
            <li id="cart"><Link to="/cart">&#x1F6D2;CART</Link></li>
            <li id="contact"> <Link to="/cont">&#x1F4DE;CONTACTUS</Link></li>
            <li className="status" >{onlineStatus ? "🟢":"🟠" }</li>
            <button className="btn" onClick={()=>{
             btnName==="login"? setbtnName("logout"):setbtnName("login")
            }}>{btnName}</button>
          </ul>

        </div>
      </div>
  );
};

export default Head