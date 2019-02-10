import {combineReducers} from 'redux';
import courses from './coursesReducer';
import authors from './authorsReducer';
import ajaxCallsInprogess from './ajaxStatusReducer';

const reducers = combineReducers({
  courses,
  authors,
  ajaxCallsInprogess
});

export default reducers;