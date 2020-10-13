import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './LandingPage.css';

// CUSTOM COMPONENTS
import LoginForm from '../LoginForm/LoginForm';

class LandingPage extends Component {

  render() {
    return (
      <div className="container">

        <div className="grid">
          <div className="grid-col grid-col_8">
                <div id= "gettingStarted">
                  <h2>Getting Started</h2>
                    <ol id= "gettingStartedList">
                      <li>Create an Account</li>
                          <div className="detailsUnderList">Fill in the form with your details. This app is designed for people currently undergoing COVID-19
                          or who want to log their sympmtoms and vitals daily</div>
                      <li>Fill out Demographics data in your Account Profile</li>
                          <div className="detailsUnderList">Demographics data collected will be used for further research into COVID-19 and how it affects everyone directly
                          </div>
                      <li>Log your Vitals and Symptoms daily</li>
                          <div className="detailsUnderList">You will need a blood pressure monitor, a pulse oximeter and thermometer to log these items
                          </div>
                      <li>Compare your Vitals, Symptoms, Treatment and Demographics to Others</li>
                          <div className="detailsUnderList"> Pull up your personal data and compare it to others anonymously</div>
                    </ol>

                </div>

                <div id = "yearlyStats">
                  <h2>Yearly Leading Causes of Death in the USA</h2>
                      <ol id="yearlyList">
                        <li>Heart Disease: 647,457</li>
                        <li>Cancer: 599,108</li>
                                        <div id= "covidDeaths">3rd Place: COVID-19 Deaths in the USA: 212,651</div>
                        <li>Accidents (unintentional injuries): 169,936</li>
                        <li>Chronic lower respiratory diseases: 160,201</li>
                        <li>Stroke (cerebrovascular diseases): 146,383</li>
                        <li>Alzheimer's disease: 121,404</li>
                        <li>Diabetes: 83,564</li>
                        <li>Influenza and Pneumonia: 55,672</li>
                        <li>Nephritis, nephrotic syndrome and nephrosis: 50,633</li>
                        <li>Intentional self-harm (suicide): 47,173</li>
                      </ol>
                </div> 
          </div>
          <div className="grid-col grid-col_4">
            <LoginForm/>


          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
