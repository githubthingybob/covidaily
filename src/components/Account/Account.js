import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {HashRouter, Link} from 'react-router-dom';

//styling
import './Account.css'

class Account extends Component {
    state = {
        email: String(this.props.store.user.email),
        covid: String(this.props.store.user.covid),
        covidSymptoms: String(this.props.store.user.covid_symptoms),
        cigs: String(this.props.store.user.covid),
        vitamins: String(this.props.store.user.vitamins),
        insurance: String(this.props.store.user.insurance),
        children: String(this.props.store.user.children),
        negative: String(this.props.store.user.negative),
    }

    
  render() {
    return (
        <HashRouter>
      <div id="account-container">
          <div>
              <Link to="/accountupdate"><button>Go To Update Account</button></Link>
          </div>

        <div>
            <ul className= "account-list">
                <li>User ID</li>
                    <div>{this.props.store.user.id}</div>
                <li>User Name</li>
                    <div>{this.props.store.user.username}</div>
                <li>Email </li>
                    <div>{this.state.email}</div>
            </ul>
        </div>
        <div>
            <ul className= "account-list">
                <li>Covid Positive </li>
                    <div>{this.state.covid}</div>
                <li>Covid-like Symptoms?</li>
                    <div>{this.state.covidSymptoms}</div>
                <li>Smoker or 2nd Hand Smoker? </li>
                    <div>{this.state.cigs}</div>
                <li>Take daily vitamins? </li>
                    <div>{this.state.vitamins}</div>
                <li>Have medical insurance? </li>
                    <div>{this.state.insurance}</div>
                <li>Children in daycare/school in person? </li>
                    <div>{this.state.children}</div>
                <li>Negatively affected by COVID-19? </li>
                    <div>{this.state.negative}</div>
            </ul>
        </div>
        <div>
            <ul className= "account-list">
                <li>Personality </li>
                    <div>{this.props.store.user.personality}</div>
                <li>Air Conditioning Type </li>
                    <div>{this.props.store.user.AC}</div>
                <li>Type of Residence </li>
                    <div>{this.props.store.user.residence}</div>
                <li>Type of water </li>
                    <div>{this.props.store.user.water}</div>
                <li>Race </li>
                    <div>{this.props.store.user.race}</div>
                <li>Type of Development </li>
                    <div>{this.props.store.user.development}</div>
                <li>Average Monthly Hospital/Clinic Visits </li>
                    <div>{this.props.store.user.visits}</div>
                <li>Sex </li>
                    <div>{this.props.store.user.sex}</div>
                <li>Age Range </li>
                    <div>{this.props.store.user.age}</div>
                <li>Income Range </li>
                    <div>{this.props.store.user.income}</div>
                <li>Average Monthly Social Visits (3+ people) </li>
                    <div>{this.props.store.user.social}</div>
                <li>Weight Range </li>
                    <div>{this.props.store.user.weight}</div>
            </ul>
        </div>

      </div>
      </HashRouter>
    );
  }
}

export default connect(mapStoreToProps)(Account);

