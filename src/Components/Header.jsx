import { Link, NavLink } from "react-router-dom";
import "../App.css";
const Header = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "none" : "underline",
      color: isActive ? "red" : "white",
      fontSize: "15px",
    };
  };
  return (
    <div className="header">
      {/* <Link to ='/'>
        <h1>Home</h1>
      </Link>
      <Link to = '/about'>
        <h1>About</h1>
      </Link>
      <Link to = '/contact'>
        <h1>Contact</h1>
      </Link>
      <Link to = '/error'>
        <h1>Error</h1>
      </Link> */}
      <NavLink style={navLinkStyles} to={"/"}>
        <h1>Home</h1>
      </NavLink>
      <NavLink style={navLinkStyles} to={"/contact"}>
        <h1>Contact</h1>
      </NavLink>
      <NavLink style={navLinkStyles} to={"/about"}>
        <h1>About</h1>
      </NavLink>
      <NavLink style={navLinkStyles} to={"/error"}>
        <h1>Error</h1>
      </NavLink>
    </div>
  ); 
};
export default Header;
