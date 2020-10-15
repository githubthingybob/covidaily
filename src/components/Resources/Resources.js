import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


class Resources extends Component {


  render() {
    return (
      <div>
        <h2>Resources</h2>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Resources);
