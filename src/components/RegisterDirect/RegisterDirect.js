import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { HashRouter, Link } from 'react-router-dom';


//materialUI & styling
import Button from '@material-ui/core/Button';
import "./RegisterDirect.css";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


class RegisterDirect extends Component {


  render() {
    return (
        <HashRouter>
      <div>
        <h2>Congratulations!</h2>
        <h2>You've created an account!</h2>

    <Link to="/accountupdate"><Button startIcon ={<ArrowBackIcon/>}>Finish Updating Your Profile</Button></Link>
    <Link to="/dailylogger"><Button endIcon ={<ArrowForwardIcon/>}>Log Your Daily Vitals and Symptoms</Button></Link>
      </div>
      </HashRouter>
    );
  }
}

export default connect(mapStoreToProps)(RegisterDirect);

