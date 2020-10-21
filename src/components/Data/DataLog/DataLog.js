import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

import DataLogItem from '../DataLogItem/DataLogItem';
import './DataLog.css'


class DataLog extends Component {

  componentDidMount=()=>{
    this.props.dispatch({
      type: 'FETCH_LOGS',
      payload: this.props.store.user.id
    })
  };
  
  render() {
    console.log('DataLog this.props.store', this.props.store);
    
    return (
      <div id="data-log-main-div">
        <table id="data-log-main-table">
          <thead >
            <tr id="data-log-thead">
              <th>Date</th>
              <th>Oximeter</th>
              <th>Temperature</th>
              <th>Blood Pressure</th>
              <th>Treatment</th>
              <th>Other Treatment:</th>
              <th>Feelings</th>
              <th>Reactions</th>
              <th>Other Reactions:</th>
              <th>Symptoms</th>
              <th>Other Symptoms:</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
              {this.props.store.logsReducer.map((item, i)=>
              <DataLogItem 
              key={i}
              item={item}
              />)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(DataLog);
