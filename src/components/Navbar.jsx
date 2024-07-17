import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "500px",
          justifyContent: "space-between",
            margin: "auto",
        }}
      >
        <Link to="/home">Home</Link>
        <Link to="/Search">Search</Link>
        <Link to="/users">Users</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>

       
        
      </div>
    </>
  );
};

export default NavBar;
