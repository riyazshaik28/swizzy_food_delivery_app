
const UserCart = (props) => {
  const {name,location}=props;
  return (
    <div className="user-cart">
      <h2> NAME: {name}</h2>
      <h2> LOCATION: {location}</h2>
      <h2> CONTACT: sshaikriyaz@gmail.com</h2>
      <img src={logo} alt={"My Image"} />
    </div>
  );
};

export default UserCart;
