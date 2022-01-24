import React from "react";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () =>{
    return(
<>
<nav className="navbar navbar-expand-md bg-dark navbar-dark">
  <a className="navbar-brand" href="#">ReactTuts</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
      <a className="nav-link"  ><Link to="/"> HOME </Link></a>
      </li>
      <li className="nav-item">
      <a className="nav-link" activeClassName="menu_active" ><Link to="/about"> ABOUT </Link></a>
      </li>
      <li className="nav-item">
      <a className="nav-link" activeClassName="menu_active" ><Link to="/service"> SERVICE </Link></a>
      </li>  
      <li className="nav-item">
        <a className="nav-link"activeClassName="menu_active" ><Link to="/contact"> CONTACT </Link></a>
      </li>  
      <li className="nav-item">
        <a className="nav-link"activeClassName="menu_active" ><Link to="/log"> LOGIN </Link></a>
      </li> 
      <li className="nav-item">
        <a className="nav-link"activeClassName="menu_active" ><Link to="/signup"> SIGNUP </Link></a>
      </li> 
    </ul>
  </div>  
</nav></>
    );
};

export default Navbar;