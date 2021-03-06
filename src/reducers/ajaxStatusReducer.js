import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

const actionTypeEndsInSuccess = (type) => {
  return type.substring(type.length - 8) == '_SUCCESS';
}

export default function ajaxStatusReducer(state = initialState.ajaxCallsInprogress, action){
  if (action.type == actionTypes.BEGIN_AJAX_CALL) {
    return state + 1;
  } else if(actionTypeEndsInSuccess(action.type)){
    return state - 1;
  }

  return state;
}