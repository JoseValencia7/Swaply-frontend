import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Montamos el componente principal en el div root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
