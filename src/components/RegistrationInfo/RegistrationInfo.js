import React, { Component } from 'react';
import { connect } from 'react-redux';
import {HashRouter, Link} from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';

//styling
import './RegistrationInfo.css'

class RegistrationInfo extends Component {

  render() {
    return (
      <HashRouter>
      <div>
        <div id="registration-info-div">
              <p>
                This application’s purpose is to collect data from a diverse pool of participants and compare how different demographics have been affected by 
                COVID-19. We want to have daily logs of their vitals and symptoms and their general feelings and reactions to different treatments. We are 
                limiting our pool to US residents only. As we further develop this application, we will limit the number of accounts by IPs to protect our data 
                from being tampered with or skewed in favor of treatments or groups. 
                This application was not made by a group of researchers or medical professionals, this application’s purpose is not to give you specific medical 
                advice , please instead seek a licensed medical professional. Even while following recommended guidelines, people may still get COVID-19 as it may 
                be impossible to completely prevent its transmission through objects, surfaces, people, water, air, insects and animals. All we can do is lower our 
                chances of being infected and lessen its spread. Our application offers common sense guidelines and resources that we hope will protect you and the 
                general public from COVID-19. 
                We want to protect your privacy as much as possible, while collecting your data, we will not ask for your names, you will be assigned a randomly 
                generated user name.
                We hope that this application can offer some value to the general public and further insight into COVID-19. Please answer questions truthfully and 
                fill out your demographics data in your account. 
                
                Remember to stay safe! 
              </p>
        </div>
        <Link to="/registration"><button id="continue-registration">Continue Registration</button></Link>
      </div>
      </HashRouter>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(RegistrationInfo);
