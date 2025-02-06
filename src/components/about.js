import React from "react";
import UserCart from "./User";

class About extends React.Component{

 
    constructor(props){
 super(props);
 //console.log("parent constructor");
    }

  componentDidMount(){


      //  console.log("parent mount");

    }
    render()
    {
       // console.log('parent render');
        return ( 
    
       <><div className="bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400 text-white py-12 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">About Us</h1>
        <pre className="text-xl mb-6 text-wrap">
          At [kepto], we are passionate about bringing delicious meals straight to your doorstep.
          Whether you're craving a hot pizza, fresh sushi, or a hearty burger, we ensure quick and
          reliable delivery with every order.
        </pre>
        <pre className="text-lg text-gray-200 mb-6 text-wrap">
          Our mission is to make dining more accessible, enjoyable, and convenient. We partner with
          top local restaurants to offer a wide variety of dishes for every taste. We aim to provide
          the best customer experience with easy ordering, timely delivery, and fantastic food.
        </pre>
        <pre className="text-md text-gray-300 mb-6 text-wrap">
          We believe food brings people together, and we’re here to make that experience even more
          convenient, so you can focus on enjoying your meal.
        </pre>
        <footer className="mt-8">
          <p className="text-sm text-gray-300">© 2024 [kepto]. All rights reserved.</p>
        </footer>
      </div>
    </div>




<div className="h-64 w-full border border-solid border-black bg-lime-50"> 
        
        <p><UserCart name={"riyaz"} location={"thorrur"}/> </p>


       { /*USERCLASS ABOUTUS USING CLASS BASED COMPONENTS*/}
      { /* <p> <UserClass  /> </p> */}
        
        </div>
</>

        ); 

    }
}
export default About;
//FUNCTIONAL COMPONENT
/*
const About=()=>{
    return (
        <div> 
        <h1> about page</h1>
        <h2> hai these is about page</h2>
        <p><UserCart name = {"SHAIK RIYAZ(function)"}location={"THORRUR"} /> </p>
        <p> <UserClass name = {"SHAIK RIYAZ(CLAS)"}location={"THORRUR"}  /> </p>

        </div>
    );
};
export default About;
*/