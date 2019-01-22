import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function coursesReducer(state = initialState.courses, action){
  switch(action.type){
    case actionTypes.CREATE_COURSE:
      return [...state, Object.assign({}, action.course)]
    case actionTypes.LOAD_COURSES_SUCCESS:
      return action.courses
    case actionTypes.LOAD_COURSES_FAILED:
      return action.response;
    default:
      return state
  }
}