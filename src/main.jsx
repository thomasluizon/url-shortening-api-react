import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/App';
import './styles/css/index.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';

ReactDOM.createRoot(document.querySelector('#root')).render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
);
