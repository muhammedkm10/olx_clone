import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import config from './firebase/config';
import { initializeApp } from 'firebase/app';
import Context from './store/context.js'
const app   = initializeApp(config)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Context>
       <App />

    </Context>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
