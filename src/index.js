import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Use window.location for navigation after login
const onRedirectCallback = (appState) => {
  window.location.href = appState?.returnTo || window.location.pathname;
};

root.render(
  <Auth0Provider
    domain="dev-y6jfhjhzmx46i1ai.us.auth0.com"
    clientId="731digQQQ2UFmL0g18lBYYDgwOvHGkDV"
    redirectUri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <Router>
      <App />
    </Router>
  </Auth0Provider>
);
