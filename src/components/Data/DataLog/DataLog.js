
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
      <>
          <DataLogItem/>
      </>
    );
  }
}

export default connect(mapStoreToProps)(DataLog);