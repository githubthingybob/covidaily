import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class Tips extends Component {


  render() {
    return (
      <div>
        <h2>Testing</h2>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Tips);
