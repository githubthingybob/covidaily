import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

import './HomeNotLoggedIn.css'
import './Tips.css'

class Tips extends Component {


  render() {
    return (
      <div id="tips-div">
        <h2>COVID-19 Tips</h2>
        <div>Stay Safe.</div>
        <div>Wash your hands for 30 seconds.</div>
        <div>Wear N95 masks if possible.</div>
        <div>Wear eye-protection</div>
        <div>Change clothes when returning home.</div>
        <div>Limit exposure to others.</div>
        <div>Don't bring shoes inside.</div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Tips);
