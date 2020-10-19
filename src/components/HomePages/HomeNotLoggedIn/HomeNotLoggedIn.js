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
      <div className="container">

        <div className="grid">
          <div className="grid-col_8">
                <GettingStarted/>
            <div id="divider"></div>
                <YearlyDeaths/>
          </div>

          <div className="grid-col_4">
                <LoginForm/>
                <Tips/>
          </div>
      </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(HomeNotLoggedIn);
