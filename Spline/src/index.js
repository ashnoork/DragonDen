import React from 'react';
import ReactDOM from 'react-dom/client'; // Import 'react-dom/client' instead of 'react-dom'
import './index.css';
import App from './App';

// Get the root DOM element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Use the new 'createRoot' method
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
