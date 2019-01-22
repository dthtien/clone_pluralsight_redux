import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import HomePage from './components/home/HomePage';
import AboutPage from "./components/about/AboutPage";
import CoursesPage from './components/courses/CoursesPage';
import ManageCoursePage from './components/courses/ManageCoursePage';

export default () => (
  <div>
    <Switch>
      <Route exact path='/' render={ (a="lelel") => (<HomePage title={a} />)  } />
      <Route path='/about' component={ AboutPage } />
      <Route exact path='/courses' component={ CoursesPage } />
      <Route path='/courses/:id' component={ ManageCoursePage } />
    </Switch>
  </div>
)