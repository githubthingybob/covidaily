import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

//styling
import './HomeLoggedIn.css'

class HomeLoggedIn extends Component {


  render() {
    return (
      <div id="main-container">
        <h2>Hello</h2>

      </div>
    );
  }
}

export default connect(mapStoreToProps)(HomeLoggedIn);

