import * as actionTypes from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses) {
  return {type: actionTypes.LOAD_COURSES_SUCCESS, courses};
}

export function loadCoursesFailed(response){
  return {type: actionTypes.LOAD_COURSES_FAILED, response}
}

export function loadCourses(){
  return function(dispatch){
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
    return courseApi.saveCourse(course)
      .then(savedCourse => 
        course.id ? dispatch(updateCourseSuccess(savedCourse)) : dispatch(createCourseSuccess(savedCourse))
      ).catch()
  }
}