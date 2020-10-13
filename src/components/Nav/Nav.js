import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';

class Nav extends Component {
 

  render () {
  return (
    <>
      <Link to="/home"><h2 className="nav-title">COVIDaily</h2></Link>

      <div className="nav-div">
          <ul className="nav-list">
            <li className ="inline-li"><Link className="nav-link-li" to="/home">Home</Link></li>
            <li className ="inline-li"><Link className="nav-link-li" to="/resources">Resources</Link></li>
            <li className ="inline-li"><Link className="nav-link-li" to="/about">About</Link></li>
          </ul>
      </div>

      <div className="nav-line"></div> 
    </>
  );
}
};

export default connect(mapStoreToProps)(Nav);
