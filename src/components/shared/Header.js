import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <NavLink exact to='/'>Home</NavLink>
    {"|"}
    <NavLink to='/about'>About</NavLink>
    {"|"}
    <NavLink to='/courses'>Courses</NavLink>
  </div>
)

export default Header;