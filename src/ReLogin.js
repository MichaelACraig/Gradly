import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

function ReLogin() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    // If not authenticated, immediately prompt for login
    if (!isAuthenticated) {
      loginWithRedirect();
    } else {
      // If the user is somehow still authenticated, 
      // redirect them away, e.g., to /home or /forms
      navigate("/home");
    }
  }, [isAuthenticated, loginWithRedirect, navigate]);

  return <div>Redirecting to login...</div>;
}

export default ReLogin;
