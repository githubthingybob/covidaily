import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import './HomeNotLoggedIn.css'

class YearlyDeaths extends Component {


  render() {
    return (
      <div>
        <div id = "yearlyStats">
          <h2 className="h2-yearly">Yearly Leading Causes of Death in the USA</h2>
              <ol id="yearlyList">
                <li>Heart Disease: 647,457</li>
                <li>Cancer: 599,108</li>
                                  <div id= "covid-deaths">3rd Place: COVID-19 Deaths in the USA: {this.props.store.covidReducer.map ((covid, i) => 
                                  <span key={i}>{covid.death}</span>)}</div>
                <li>Accidents (unintentional injuries): 169,936</li>
                <li>Chronic lower respiratory diseases: 160,201</li>
                <li>Stroke (cerebrovascular diseases): 146,383</li>
                <li>Alzheimer's disease: 121,404</li>
                <li>Diabetes: 83,564</li>
                <li>Influenza and Pneumonia: 55,672</li>
                <li>Nephritis, nephrotic syndrome and nephrosis: 50,633</li>
                <li>Intentional self-harm (suicide): 47,173</li>
                                  <div id="usaCases">Current USA Cases:{this.props.store.covidReducer.map ((covid, i) => 
                                  <span key={i}>{covid.positive}</span>)}</div>
              </ol>
          </div> 


      </div>
    );
  }
}

export default connect(mapStoreToProps)(YearlyDeaths);

