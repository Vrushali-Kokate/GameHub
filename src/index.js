import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import your main App component

// If you set up Tailwind locally, you might import your main CSS here:
// import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);