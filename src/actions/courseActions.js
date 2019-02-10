import * as actionTypes from './actionTypes';
import courseApi from '../api/mockCourseApi';
import { beginAjaxCall } from './ajaxStatusActions';

export function loadCoursesSuccess(courses) {
  return {type: actionTypes.LOAD_COURSES_SUCCESS, courses};
}

export function loadCoursesFailed(response){
  return {type: actionTypes.LOAD_COURSES_FAILED, response}
}

export function createCourseSuccess(course){
  return {
    type: actionTypes.CREATE_COURSE_SUCCESS,
    course
  }
}

export function updateCourseSuccess(course){
  return {
    type: actionTypes.UPDATE_COURSE_SUCCESS,
    course
  }
}

export function loadCourses(){
  return function(dispatch){
    dispatch(beginAjaxCall())
    return courseApi.getAllCourses()
      .then(courses => {
        dispatch(loadCoursesSuccess(courses));
      }).catch(error => {
        throw(error);
      });
  }
}

export function saveCourse(course){
  return function(dispatch, getState){
    dispatch(beginAjaxCall())
    return courseApi.saveCourse(course)
      .then(savedCourse => 
        course.id ? dispatch(updateCourseSuccess(savedCourse)) : 
          dispatch(createCourseSuccess(savedCourse))
      ).catch(error => { throw(error); })
  }
}