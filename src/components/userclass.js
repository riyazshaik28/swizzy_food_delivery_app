import React from "react";
class UserClass extends React.Component{
      
    constructor(props){
        
        super(props);
        this.state={
            count:22,
            
       
        }
        console.log(props);
        console.log(this.props.name+"child constructor");
    }


componentDidMount(){
    console.log(this.props.name+"child mount");
}

    render() {
        
        console.log(this.props.name+"child render");
        return(
            <div className="user-cart">
                <h1>count={this.state.count}</h1>
                <button className="tttt" onClick={()=>{
                     this.setState({
                        count:this.state.count+1,
                        
                 });
                }}>button</button>
      <h2> NAME: {this.props.name}</h2>
      <h2> LOCATION: {this.props.location}</h2>
      <h2> CONTACT: sshaikriyaz@gmail.com</h2>
      
    </div>
        );
    }

}

export default UserClass;