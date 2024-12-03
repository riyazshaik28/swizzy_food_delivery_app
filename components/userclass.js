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

const data= await fetch("https://api.github.com/users/RIYAZ12697");
const json= await data.json();
 console.log(json);
 
 this.setState({
   info:json
 });

}
componentDidUpdate(){
  console.log("called in update phase");
}

    render() {
      //  console.log(this.props.name+"child render");
      
        return(
           
            <div className="user-cart">
                
      <h2> NAME: {this.state.info.name}</h2>
      <h2> LOCATION: {this.state.info.location}</h2>
      <h2> CONTACT: sshaikriyaz@gmail.com</h2>
      <img className="pic" src={this.state.info.avatar_url}/>
    
    </div>
    
        );
        
       
  
   }
    }



export default UserClass;