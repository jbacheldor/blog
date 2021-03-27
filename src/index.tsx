import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Routes} from './Routes'
import Nav from "./Nav/Index"


ReactDOM.render(
  <React.StrictMode>
    <Routes />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

