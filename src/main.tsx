import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Removed the .tsx extension
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Moved this argument here
);
