import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"; 

function Header() {
  return (
    <nav className="header">
      <div class="navigation-bar-item">
        <NavLink to="/home" className="nav-link">Home</NavLink>
      </div>

      <div class="navigation-bar-item">
       <NavLink to="/mylistings" className="nav-link">My Listings</NavLink>
      </div>

      <div class="navigation-bar-item">
        <NavLink to="/contacts" className="nav-link">Contacts</NavLink>
      </div>

      <div class="navigation-bar-item">
        <NavLink to="/profile" className="nav-link">Profile</NavLink>
      </div>

      <div class="navigation-bar-item">
        <NavLink to="/login" className="nav-link">
          <i class="bi bi-person-circle"></i>
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;