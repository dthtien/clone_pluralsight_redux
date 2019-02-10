import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends Component {
  constructor(props, context){
    super(props, context)
    this.context = context;

    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this)
  }

  redirectToAddCoursePage(){
    this.props.history.push('/courses/new')
  }

  render() {
    const { courses } = this.props;
    return(
      <div className='container'>
        <h1>Courses</h1>
        <input
          type='submit'
          value='Add course'
          className='btn btn-primary'
          onClick={this.redirectToAddCoursePage} />
        <CourseList courses={courses}/>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  return{
    courses: state.courses
  }
}

function mapDispathToProps(dispatch){
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispathToProps)(CoursesPage);