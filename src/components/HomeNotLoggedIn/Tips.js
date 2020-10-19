import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class Tips extends Component {


  render() {
    return (
      <div id="tips-div">
        <h2>COVID-19 Tips</h2>
        <p>Stay Safe.</p>
        <p>Wash your hands for 30 seconds.</p>
        <p>Wear N95 masks if possible.</p>
        <p>Wear eye-protection</p>
        <p>Change clothes when returning home.</p>
        <p>Limit exposure to others.</p>
        <p>Don't bring shoes inside.</p>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Tips);
