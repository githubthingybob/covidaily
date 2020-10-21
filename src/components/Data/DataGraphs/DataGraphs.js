import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';


class DataGraphs extends Component {

  render() {
    return (
      <div>
        <h2>TESTING</h2>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(DataGraphs);
