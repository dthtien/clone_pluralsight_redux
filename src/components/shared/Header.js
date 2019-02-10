import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import LoadingDots from './LoadingDots';
import {connect} from 'react-redux';

class Header extends Component {
  render(){
    const { loading } = this.props;
    return(
      <div>
        <NavLink exact to='/'>Home</NavLink>
        {"|"}
        <NavLink to='/about'>About</NavLink>
        {"|"}
        <NavLink to='/courses'>Courses</NavLink>
        {loading && <LoadingDots interval={100} dots={20} />}
      </div>
  )}
}

Header.propTypes = {
  loading: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
  loading: state.ajaxCallsInprogess > 0
}) 
export default connect(mapStateToProps)(Header);