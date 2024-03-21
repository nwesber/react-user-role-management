import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Removed the .tsx extension
import './index.css';

/**
 * Main entry point for the React application.
 *
 * Uses ReactDOM to render the App component into the DOM.
 * The App component serves as the root of the application, containing all other components.
 */
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root') // Moved this argument here
);
