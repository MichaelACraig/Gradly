import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import {useAuth0} from '@auth0/auth0-react';
import LogOut from './LogOut.js';
import Header from './Header.js';
import Contacts from './Contacts.js';
import Login from './Login.js';
import Home from './Home.js';
import MyListings from './MyListings.js';
import Profile from './Profile.js';

function App() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <Router>
      <div className="App">
        <Header />
        {/* <main className="App-main">
            
        </main> */}
        {/* Router for navigating to Login after clicking button*/}
        <Routes>
              <Route path = '/login' element={<Login />} />
              <Route path = '/logout' element={<LogOut />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/home" element={<Home />} />
              <Route path="/mylistings" element={<MyListings />} />
              <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
