import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import './HomeNotLoggedIn.css'

class GettingStarted extends Component {


  render() {
    return (
        <div id= "gettingStarted">
            <h2 className="h2-gettingStarted">Getting Started</h2>
                <ol id= "gettingStartedList">
                    <li className="li-landingPage">Create an Account</li>
                          <div className="detailsUnderList">Fill in the form with your details. This app is designed for people currently undergoing COVID-19
                          or who want to log their sympmtoms and vitals daily</div>
                    <li className="li-landingPage">Fill out Demographics data in your Account Profile</li>
                          <div className="detailsUnderList">Demographics data collected will be used for further research into COVID-19 and how it affects everyone directly
                          </div>
                    <li className="li-landingPage">Log your Vitals and Symptoms daily</li>
                          <div className="detailsUnderList">You will need a blood pressure monitor, a pulse oximeter and thermometer to log these items
                          </div>
                    <li className="li-landingPage">Compare your Vitals, Symptoms, Treatment and Demographics to Others</li>
                          <div className="detailsUnderList"> Pull up your personal data and compare it to others anonymously</div>
                </ol>
        </div>
    );
  }
}

export default connect(mapStoreToProps)(GettingStarted);