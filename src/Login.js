import React from "react";
import LoginButton from "./LoginButton";
import house from './house.jpg';

function Login() {
  return <>
    <img src={house} className="App-logo" alt="logo" />
    <p id="Welcome-message-login-page">
        Welcome to HouseFinder.io! Login to our website to find the 
        best house match for your needs.
    </p>
    <LoginButton/>
  </>;
}

export default Login;