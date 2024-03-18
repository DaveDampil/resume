import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Importing your main App component

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Rendering your main App component */}
  </React.StrictMode>,
  document.getElementById('root') // Mounting your React app into the HTML element with the id 'root'
);
