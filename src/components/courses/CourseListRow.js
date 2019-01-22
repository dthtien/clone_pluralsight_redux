import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/styles.css';

const CourseListRow = ({course}) => {
  return(
    <tr>
      <td><a href={course.watchHref} target="_blank">Watch</a></td>
      <td><Link to={'/courses/' + course.id}>{course.title}</Link></td>
      <td>{course.authorId}</td>
      <td>{course.category}</td>
      <td>{course.length}</td>
    </tr>
  )
}

export default CourseListRow;