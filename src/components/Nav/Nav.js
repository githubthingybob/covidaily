import React from 'react';
import {HashRouter, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';



function Nav(props) {
const loggedIn = props.store.user.id

if (loggedIn != null) {
  return (
        <HashRouter>
              <h2 className="nav-title">COVIDAILY</h2>
                  <div className="nav-div">
                      <ul className="nav-list">
                        <li className ="inline-li"><Link className="nav-link-li" to="/resources">Resources</Link></li>
                        <li className ="inline-li"><Link className="nav-link-li" to="/dailylogger">Daily Logger</Link></li>
                        <li className ="inline-li"><Link className="nav-link-li" to="/data">Data</Link></li>
                        <li className ="inline-li"><Link className="nav-link-li" to="/account">Account</Link></li>
                        <li className ="inline-li"><Link className="nav-link-li" to="/home" onClick={()=>props.dispatch({type:'LOGOUT'})}>Log Out</Link></li>
                        <li></li>
                      </ul>
                  </div>
              <div className="nav-line"></div> 
      </HashRouter>
  );
}

  else {
    return(
      <HashRouter>
        <h2 className="nav-title">COVIDAILY</h2>
              <div className="nav-div">
                  <ul className="nav-list">
                    <li className ="inline-li"><Link className="nav-link-li" to="/home">Home</Link></li>
                    <li className ="inline-li"><Link className="nav-link-li" to="/resources">Resources</Link></li>
                  </ul>
              </div>
        <div className="nav-line"></div> 
      </HashRouter>
    )
}
}

export default connect(mapStoreToProps)(Nav);