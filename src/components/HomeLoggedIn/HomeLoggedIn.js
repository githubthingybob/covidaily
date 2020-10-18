import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class HomeLoggedIn extends Component {


  render() {
    return (
      <div>
        <h2>Hello</h2>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(HomeLoggedIn);

