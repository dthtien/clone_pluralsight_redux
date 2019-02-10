import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/home/HomePage';
import AboutPage from "./components/about/AboutPage";
import CoursesPage from './components/courses/CoursesPage';
import ManageCoursePage from './components/courses/ManageCoursePage';

export default () => (
  <div>
    <Switch>
      <Route exact path='/' component={ HomePage } />
      <Route path='/about' component={ AboutPage } />
      <Route exact path='/courses' component={ CoursesPage } />
      <Route path='/courses/new' component={ ManageCoursePage } />
      <Route path='/courses/:id' component={ ManageCoursePage } />
    </Switch>
  </div>
)