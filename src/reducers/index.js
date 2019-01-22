import {combineReducers} from 'redux';
import courses from './coursesReducer';
import authors from './authorsReducer';

const reducers = combineReducers({
  courses,
  authors
});

export default reducers;