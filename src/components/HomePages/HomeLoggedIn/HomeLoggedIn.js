import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import {HashRouter, Link} from 'react-router-dom';



//styling
import './HomeLoggedIn.css'
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CarouselThing from '../../CarouselThing/CarouselThing';

class HomeLoggedIn extends Component {


  render() {
    return (
      <HashRouter>
        <div id="main-container">
            
            <div className="main-directory">
              <h2>Things to Do</h2>
              <p>
                <Link to="/accountupdate"><Button startIcon ={<ArrowBackIcon/>}>Update Your Profile</Button></Link>
                <Link to="/dailylogger"><Button endIcon ={<ArrowForwardIcon/>}>Log Vitals and Symptoms</Button></Link>
                </p>
                <p>
                <Link to="/data"><Button startIcon ={<ArrowBackIcon/>}>Check out your Data</Button></Link>
                <Link to="/dailylogger"><Button endIcon ={<ArrowForwardIcon/>}>Check out Resources</Button></Link>
              </p>
            </div>
            <CarouselThing/>
         
        </div>
      </HashRouter>
    );
  }
}

export default connect(mapStoreToProps)(HomeLoggedIn);

