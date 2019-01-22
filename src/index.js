import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import { loadCourses } from './actions/courseActions';
import { loadAuthors } from './actions/authorAction';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
  <Provider store={store}>
    <Router>
      <App /> 
    </Router>
  </Provider>,
  document.getElementById('app')
)