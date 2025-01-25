import React from "react";
import LoginButton from "./LoginButton";
import house from './house.jpg';

function Login() {
  return <>
    <img src={house} className="App-logo" alt="logo" />
    <p>
        Welcome to HouseFinder.io! Login to our website to find the 
        best house match for your needs.
    </p>
    {/* <Link to="/login">
        <button className="btn btn-secondary">Log In</button>
    </Link> */}
    <LoginButton />
  </>;
}

export default Login;