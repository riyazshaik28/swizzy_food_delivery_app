import React from "react";
import UserCart from "./User";
import UserClass from "./userclass";

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
        <div> 
        <h1> about page</h1>
        <h2> hai these is about page</h2>
        <p><UserCart name={"riyaz"} location={"thorrur"}/> </p>
        <p> <UserClass  /> </p>
        
        </div>
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