import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

//graphs
import Oximeter from '../DataGraphItems/Oximeter';

class DataGraphs extends Component {


  render() {
    return (
      <div id="data-graphs-container">
      <Oximeter/>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(DataGraphs);

