import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends Component {
  constructor(props, context){
    super(props, context)

    this.state = {
      course: {
        title: ""
      },
      isLoading: false
    }

    this.onTitleChange = this.onTitleChange.bind(this)
    this.onClickSave = this.onClickSave.bind(this)
  }

  componentWillReceiveProps(ownProps, newProps){
    if (ownProps !== newProps){
      this.setState({isLoading: true})
    }
  }

  onTitleChange(e) {
    const course = {
      [e.target.name]: e.target.value
    }

    this.setState({course: course})
  }

  onClickSave() {
    this.props.actions.createCourse(this.state.course)
    const course = {title: ''}
    this.setState({course: course})
  }

  render() {
    const {courses} = this.props;
    return(
      <div className='container'>
        <h1>Courses</h1>
        <CourseList courses={courses}/>
      </div>
    )
  }
}

CoursesPage.propType = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
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