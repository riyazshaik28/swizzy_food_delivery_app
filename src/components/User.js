
const UserCart = (props) => {
  const {name,location}=props;
  ;

  return (
    <div className="user-cart">
      <h2> NAME: {name}</h2>
      <h2> LOCATION: {location}</h2>
      <h2> CONTACT: sshaikriyaz@gmail.com</h2>
      <img className= "pic1"src={ "https://avatars.githubusercontent.com/u/180375075?v=4"} alt={"My Image"} />
    </div>
  );
};

export default UserCart;
