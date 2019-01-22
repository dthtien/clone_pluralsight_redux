import * as actionTypes from './actionTypes';
import AuthorApi from '../api/mockAuthorAPI';

export function loadAuthorsSuccess(courses) {
  return {type: actionTypes.LOAD_AUTHORS_SUCCESS, courses};
}

export function loadAuthors(){
  return function(dispatch){
    return AuthorApi.getAllAuthors()
      .then(authors => {
        dispatch(loadAuthorsSuccess(authors));
      }).catch(error => {
        throw(error);
      });
  }
}       