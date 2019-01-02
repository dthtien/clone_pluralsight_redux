import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  render() {
    return(
      <div className='jumbotron'>
        <h1>Administration</h1>
        <p>React - Redux</p>
        <Link to='about' className='btn btn-primary btn-lg'>
          Learn more
        </Link>
      </div>
    )
  }
}

export default HomePage;