
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import TableCell from '@material-ui/core/TableCell';

class DataLogDataCell extends Component {

  componentDidMount=()=>{
    this.props.dispatch({
      type: 'FETCH_LOGS',
      payload: this.props.store.user.id
    })
  };
  
  render() {
    return (
      <>
      <TableCell>
          TESTING
      </TableCell>
      <TableCell>
          EDIT
      </TableCell>
      </>
    );
  }
}

export default connect(mapStoreToProps)(DataLogDataCell);