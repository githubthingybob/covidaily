
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import DataLogTest from './DataLogTest';
import DataLogItem from '../DataLogItem/DataLogItem';
import './DataLog.css'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
              <DataLogTest/>
      </>
    );
  }
}

export default connect(mapStoreToProps)(DataLog);