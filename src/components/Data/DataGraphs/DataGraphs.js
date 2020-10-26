import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import './DataGraphs.css'

//graphs
import Oximeter from '../DataGraphItems/Oximeter';
import Temperature from '../DataGraphItems/Temperature';
import Systolic from '../DataGraphItems/Systolic';
import Diastolic from '../DataGraphItems/Diastolic';

class DataGraphs extends Component {


  render() {
    return (
      <div id="data-graphs-container">
      <Oximeter/>
      <Temperature/>
      <Systolic/>
      <Diastolic/>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(DataGraphs);

