import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

import './HomeNotLoggedIn.css';

// CUSTOM COMPONENTS
import LoginForm from '../../LoginForm/LoginForm';
import YearlyDeaths from './YearlyDeaths';
import GettingStarted from './GettingStarted';
import Tips from './Tips';

class HomeNotLoggedIn extends Component {

  componentDidMount =() =>{
      this.props.dispatch({
        type: 'FETCH_COVIDATA'
      })
  }

  render() {
    return (
      <div className="home-not-logged-container">
                <GettingStarted/>
                <YearlyDeaths/>
                <LoginForm/>
                <Tips/>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(HomeNotLoggedIn);
