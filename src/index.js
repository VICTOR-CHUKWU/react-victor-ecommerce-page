import React from 'react';
import ReactDOM from 'react-dom';
import './css/global.scss';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import {ProductDisplay} from './Contex';


ReactDOM.render(
  <React.StrictMode>
    <ProductDisplay>
    <Router>
    <App />
    </Router>
    </ProductDisplay>
   
  </React.StrictMode>,
  document.getElementById('root')
);