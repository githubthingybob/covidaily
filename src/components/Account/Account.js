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
            <table>
                <thead>
                    <tr>
                        <td>User ID</td>
                        <td>User Name</td>
                        <td>Email</td>
                        <td>Covid Positive</td>
                        <td>Covid-like Symptoms?</td>
                        <td>Smoker or 2nd Hand Smoker?</td>
                        <td>Take daily vitamins?</td>
                        <td>Have medical insurance?</td>
                        <td>Children in daycare/school in person?</td>
                        <td>Negatively affected by COVID-19?</td>
                        <td>Personality</td>
                        <td>Air Conditioning Type</td>
                        <td>Type of Residence</td>
                        <td>Type of water</td>
                        <td>Race</td>
                        <td>Type of Development</td>
                        <td>Average Monthly Hospital/Clinic Visits</td>
                        <td>Sex</td>
                        <td>Age Range</td>
                        <td>Income Range</td>
                        <td>Average Monthly Social Visits (3+ people)</td>
                        <td>Weight Range</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.props.store.user.id}</td>
                        <td>{this.props.store.user.username}</td>
                        <td>{this.state.email}</td>
                        <td>{this.state.covid}</td>
                        <td>{this.state.covidSymptoms}</td>
                        <td>{this.state.cigs}</td>
                        <td>{this.state.vitamins}</td>
                        <td>{this.state.insurance}</td>
                        <td>{this.state.children}</td>
                        <td>{this.state.negative}</td>
                        <td>{this.props.store.user.personality}</td>
                        <td>{this.props.store.user.AC}</td>
                        <td>{this.props.store.user.residence}</td>
                        <td>{this.props.store.user.water}</td>
                        <td>{this.props.store.user.race}</td>
                        <td>{this.props.store.user.development}</td>
                        <td>{this.props.store.user.visits}</td>
                        <td>{this.props.store.user.sex}</td>
                        <td>{this.props.store.user.age}</td>
                        <td>{this.props.store.user.income}</td>
                        <td>{this.props.store.user.social}</td>
                        <td>{this.props.store.user.weight}</td>
                    </tr>
                </tbody>
            </table>
        </div>

      </div>
      </HashRouter>
    );
  }
}

export default connect(mapStoreToProps)(Account);

