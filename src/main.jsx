// src/main.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Import your main App component

// Make sure you are targeting the right container ID
const rootElement = document.getElementById('app'); // This should match the ID from index.html
const root = ReactDOM.createRoot(rootElement);

// Render the App component to the root element
root.render(<App />);
