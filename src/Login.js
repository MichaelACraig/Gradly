import React from "react";
import LoginButton from "./LoginButton";
import house from './house.jpg';
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

function Login() {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate("/profile"); // Redirect to the profile page after login
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <img src={house} className="App-logo" alt="logo" />
      <p>
        Welcome to HouseFinder.io! Login to our website to find the 
        best house match for your needs.
      </p>
      <LoginButton />
    </>
  );
}

export default Login;
