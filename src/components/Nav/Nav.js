import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
import LogOutButton from '../LogOutButton/LogOutButton'

function Nav(props) {
const loggedIn = props.store.user.id

if (loggedIn != null) {
  return (
        <>
      <Link to="/home"><h2 className="nav-title">COVIDaily</h2></Link>
      <div className="nav-div">
          <ul className="nav-list">
            <li className ="inline-li"><Link className="nav-link-li" to="/home">Home</Link></li>
            <li className ="inline-li"><Link className="nav-link-li" to="/resources">Resources</Link></li>
            <li className ="inline-li"><Link className="nav-link-li" to="/about">About</Link></li>
            <li className ="inline-li"><Link className="nav-link" to="/info">Info Page</Link></li>
            <li className ="inline-li"><LogOutButton className="nav-link" /></li>
          </ul>
      </div>

      <div className="nav-line"></div> 
      </>
  );
}

  else {
    return(
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
    )
}
}

export default connect(mapStoreToProps)(Nav);