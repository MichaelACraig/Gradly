import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Auth0Provider} from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
      domain='dev-y6jfhjhzmx46i1ai.us.auth0.com'
      clientId='731digQQQ2UFmL0g18lBYYDgwOvHGkDV'
      redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>
);

