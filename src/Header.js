import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav className="header">
      <NavLink to="/home" className="nav-link">Home</NavLink>
      <NavLink to="/mylistings" className="nav-link">My Listings</NavLink>
      <NavLink to="/contacts" className="nav-link">Contacts</NavLink>
      <NavLink to="/profile" className="nav-link">Profile</NavLink>
    </nav>
  );
}

export default Header;