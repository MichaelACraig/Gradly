import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import {useAuth0} from '@auth0/auth0-react';
import Header from './Header.js';
import MyInformation from "./personalInformation.js";
import Home from './Home.js';
import MyListings from './MyListings.js';
import Profile from './Profile.js';
import ReLogin from "./ReLogin.js";
import Listings from './Listings.js';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const { isLoading, isAuthenticated, user, error } = useAuth0();

  useEffect(() => {
  console.log('isLoading:', isLoading);
  console.log('isAuthenticated:', isAuthenticated);
  console.log('user:', user);
  console.log('error:', error);
  }, [isLoading, isAuthenticated, user, error]);



  console.log("we are outside of the isauthenticated portion");


  return (
    <div className="App">
      <Header/>
      <Routes>
            {/* <Route path="/contacts" element={<Contacts />} /> */}
            <Route path="/home" element={<Home />} />
            <Route path="/mylistings" element={<MyListings />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/forms" element={<MyInformation />} />
            <Route path="/relogin" element={<ReLogin />} />
      </Routes>
    </div>
  );
}

export default App;
