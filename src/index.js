import React from 'react';
import ReactDOM from 'react-dom/client';
import Settings from './Context/Settings'
import App from './App.jsx';
import AuthProvider from "./Components/Auth";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
    <Settings>
      <App />
    </Settings>
    </AuthProvider>
  </React.StrictMode>
);
