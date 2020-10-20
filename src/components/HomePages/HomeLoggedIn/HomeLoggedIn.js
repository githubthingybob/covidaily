import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import {HashRouter, Link} from 'react-router-dom';

//styling
import './HomeLoggedIn.css'
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

class HomeLoggedIn extends Component {


  render() {
    return (
      <HashRouter>
        <div id="main-container">
            <h2>Things to Do</h2>
            <div>
                <Link to="/accountupdate"><Button startIcon ={<ArrowBackIcon/>}>Update Your Profile in Account</Button></Link>
                <Link to="/dailylogger"><Button endIcon ={<ArrowForwardIcon/>}>Log your Daily Vitals and Symptoms</Button></Link>
            </div>

            <div>
                <Link to="/data"><Button startIcon ={<ArrowBackIcon/>}>Check out your data</Button></Link>
                <Link to="/dailylogger"><Button endIcon ={<ArrowForwardIcon/>}>Log your Daily Vitals and Symptoms</Button></Link>
            </div>
            
            
         
         
         
        </div>
      </HashRouter>
    );
  }
}

export default connect(mapStoreToProps)(HomeLoggedIn);

