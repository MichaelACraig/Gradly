import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Header.css"; 


function Header() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  // Handler for the profile icon
  const handleProfileClick = () => {
    if (!isAuthenticated) {
      // If user is not authenticated, call Auth0 login
      loginWithRedirect();
    } else {
      // If user is authenticated, navigate to the profile route
      navigate("/profile");
    }
  };

  return (
    <nav className="header">
      <div className="website-title">
        Sublettee
      </div>
      <div className="header-contents">
        {/* <div className="navigation-bar-item navigation-bar-link-item">
        <NavLink to="/mylistings" className="nav-link">
          My Listings
        </NavLink>
        </div>

        <div className="navigation-bar-item navigation-bar-link-item">
          <NavLink to="/contacts" className="nav-link">
            Contacts
          </NavLink>
        </div> */}

        <div className="navigation-bar-item navigation-bar-link-item">
          <NavLink to="/home" className="nav-link">
            <i class="bi bi-house"></i>
          </NavLink>
        </div>

        <div className="navigation-bar-item">
          {/* Profile icon button */}
          <button 
            className="btn btn-primary" 
            onClick={handleProfileClick}
          >
            <i className="bi bi-person-circle"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
