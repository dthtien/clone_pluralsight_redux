import React, { Component }from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import * as _ from '../../utils/helpers';

class ManageCoursePage extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {}
    };

    this.context = context

    this.handleInputChange = this.handleInputChange.bind(this)
    this.saveCourses = this.saveCourses.bind(this)
  }

  // componentDidUpdate(prevProps){
  //   if(prevProps.course.id !== this.props.course.id){
  //     this.setState({course: Object.assign({}, this.props.course)})
  //   }
  // }

  static getDerivedStateFromProps(props, current_state) {
    if (current_state.course.id !== props.course.id) {
      return {
        course: props.course,
      }
    }
    return null;
  }

  handleInputChange(event){
    const course = Object.assign(
      {}, this.state.course,
      { [event.target.name]: event.target.value}
    )
    this.setState({course: course})
  }

  saveCourses(event){
    event.preventDefault();
    this.props.actions.saveCourse(this.state.course)
    this.context.router.history.push('/courses')
  }

  render(){
    return(
      <div className='container'>
        <h1>Manage Course Page</h1>
        <CourseForm 
          allAuthors={this.props.authors}
          course={this.state.course} 
          errors={this.state.errors}
          onChange={this.handleInputChange}
          onSave={this.saveCourses}
        />
      </div>
    );
  }
}

ManageCoursePage.propType = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

ManageCoursePage.contextTypes = {
  router: PropTypes.object
}

const defaultCourse = {
  id: '', 
  watchHref: '',
  title: '',
  authorId: '',
  length: '',
  category: ''
};

const getCourseById = (courses, courseId) => {
  const course = courses.filter(course => course.id === courseId)
  if(course) return course[0];
  return ;
}

const mapStateToProps = (state, ownProps) => {
  const courseId = ownProps.match.params.id;
  let course = defaultCourse;

  if (courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId)
  }
  
  const authorsFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName 
    }
  });
  

  return {
    course: course,
    authors: authorsFormattedForDropdown
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
