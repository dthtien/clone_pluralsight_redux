import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function authorsReducer(state = initialState.authors, action){
  switch(action.type){
    case actionTypes.LOAD_AUTHORS_SUCCESS:
      return action.courses
    default:
      return state
  }
}