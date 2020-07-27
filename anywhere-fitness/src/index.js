import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
=======
import { BrowserRouter as Router } from 'react-router-dom';
>>>>>>> f65e856951f4f73f64cef5c656b63c7dbc72c481
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<<<<<<< HEAD
  <React.StrictMode>
    <App />
  </React.StrictMode>,
=======
  <Router>
    <App />
  </Router>,
>>>>>>> f65e856951f4f73f64cef5c656b63c7dbc72c481
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
