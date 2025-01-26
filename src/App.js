import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import {useAuth0} from '@auth0/auth0-react';
import LogOut from './LogOut.js';
import Header from './Header.js';
import Contacts from './Contacts.js';
import MyInformation from "./personalInformation.js";
import Home from './Home.js';
import MyListings from './MyListings.js';
import Profile from './Profile.js';
import Listings from './Listings.js';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      console.log("we have entered the isauthenticated portion");
      navigate("/forms");
    }
  }, [isAuthenticated, navigate]);

  console.log("we are outside of the isauthenticated portion");

  return (
    <div className="App">
      <Header/>
      <Routes>
            <Route path = '/logout' element={<LogOut />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/home" element={<Home />} />
            <Route path="/mylistings" element={<MyListings />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/forms" element={<MyInformation />} />
      </Routes>
    </div>
  );
}

export default App;
