import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './containers/Login';
import './index.css';


const ENRUTAMIENTO = false;


ReactDOM.render(
  <React.StrictMode>
    {
      (ENRUTAMIENTO
        ? <App />
        : <Login />
      )
    }
  </React.StrictMode>,
  document.getElementById('root')
);