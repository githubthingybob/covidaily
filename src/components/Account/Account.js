import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

//styling
import './Account.css'

class Account extends Component {
        componentDidMount=()=>{
            this.props.dispatch({
                    type: 'GET_ACCOUNT',
                    url: `/api/user/profile/${this.state.userID}`
            });
        } //end componentDidMount

    
  render() {
    return (
      <div>
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
            </table>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Account);

