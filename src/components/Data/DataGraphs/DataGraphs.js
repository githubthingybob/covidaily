import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

//graphs
import Oximeter from '../DataGraphItems/Oximeter';
import Temperature from '../DataGraphItems/Temperature';

class DataGraphs extends Component {


  render() {
    return (
      <div id="data-graphs-container">
      <Oximeter/>
      <Temperature/>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(DataGraphs);

