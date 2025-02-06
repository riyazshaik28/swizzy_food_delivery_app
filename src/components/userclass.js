import React from "react";
class UserClass extends React.Component{
      
    constructor(props){
        
        super(props);
        this.state={
            info:{
            name: "fffff",
            location:"warangle",
            avatar_url:"httpvjkjhvc"
        }}
        
      
      //  console.log(props);
       // console.log(this.props.name+"child constructor");
    }
  

 async componentDidMount(){
// the limit of link is over 
//const data= await fetch("https://api.github.com/users/RIYAZ12697");
//const json= await data.json();
 //console.log(json);
 const json={
  name:"SHAIK RIYAZ",
  location:"THORRUR",
  avatar_url:"https://avatars.githubusercontent.com/u/180375075?v=4"
 }

 
 this.setState({
   info:json
 });
  this.timer =setInterval(()=>{
  console.log("nmaste react");
 },1000);

}
componentDidUpdate(){
  console.log("called in update phase");
}

componentWillUnmount(){
  clearInterval(this.timer)

}
    render() {
      //  console.log(this.props.name+"child render");
      
        return(
           
            <div className="h-60 w-full border border-solid border-black bg-lime-50">
                
      <h2> NAME: {this.state.info.name}</h2>
      <h2> LOCATION: {this.state.info.location}</h2>
      <h2> CONTACT: sshaikriyaz@gmail.com</h2>
      <img className="w-36 h-25 border border-solid border-black" src={this.state.info.avatar_url}/>
    
    </div>
    
        );
        
       
  
   }
    }



export default UserClass;