import React, { Component }from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import About from '../About/AboutPage';

class ManageCoursePage extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {}
    };

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event){
    const course = Object.assign(
      {}, this.state.course,
      { [event.target.name]: event.target.value}
    )
    this.setState({course: course})
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
        />
      </div>
    );
  }
}

ManageCoursePage.propType = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps){
  let course = {
    id: '', 
    watchHref: '',
    title: '',
    authorId: '',
    length: '',
    category: ''
  }

  const authorsFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName 
    }
  });s
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
