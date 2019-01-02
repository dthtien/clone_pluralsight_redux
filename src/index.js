import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import App from './components/App';
import {BrowserRouter as Router} from 'react-router-dom';

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
)