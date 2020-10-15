import React, { Component } from 'react';
import {HashRouter, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';



function Nav(props) {
const loggedIn = props.store.user.id

if (loggedIn != null) {
  return (
        <HashRouter>
      <Link to="/home"><h2 className="nav-title">COVIDaily</h2></Link>
      <div className="nav-div">
          <ul className="nav-list">
            <li className ="inline-li"><Link className="nav-link-li" to="/home">Home</Link></li>
            <li className ="inline-li"><Link className="nav-link-li" to="/resources">Resources</Link></li>
            <li className ="inline-li"><Link className="nav-link-li" to="/about">About</Link></li>
            <li className ="inline-li"><Link className="nav-link-li" to="/dailylogger">Daily Logger</Link></li>
            <li className ="inline-li"><Link className="nav-link-li" to="/data">Data</Link></li>
            <li className ="inline-li"><Link className="nav-link-li" to="/account">Account</Link></li>
          </ul>
      </div>

      <div className="nav-line"></div> 
      </HashRouter>
  );
}

  else {
    return(
  <HashRouter>
      <Link to="/home"><h2 className="nav-title">COVIDaily</h2></Link>
      <div className="nav-div">
          <ul className="nav-list">
            <li className ="inline-li"><Link className="nav-link-li" to="/home">Home</Link></li>
            <li className ="inline-li"><Link className="nav-link-li" to="/resources">Resources</Link></li>
            <li className ="inline-li"><Link className="nav-link-li" to="/about">About</Link></li>
          </ul>
      </div>

      <div className="nav-line"></div> 
      </HashRouter>
    )
}
}

export default connect(mapStoreToProps)(Nav);