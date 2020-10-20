import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

//styling
import './HomeLoggedIn.css'

class HomeLoggedIn extends Component {


  render() {
    return (
      <div id="main-container">
        <h2>Things to Do</h2>
        <h4>Update Your Profile in Account</h4>
        <h4>Log your Daily Vitals and Symptoms</h4>

      </div>
    );
  }
}

export default connect(mapStoreToProps)(HomeLoggedIn);

