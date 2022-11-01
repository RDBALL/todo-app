import React from 'react';
import ReactDOM from 'react-dom/client';
import Settings from './Context/Settings'
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Settings>
      <App />
    </Settings>
  </React.StrictMode>
);
