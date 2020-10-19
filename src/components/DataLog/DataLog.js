import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


class DataLog extends Component {

  componentDidMount=()=>{
    this.props.dispatch({
      type: 'FETCH_LOGS'
    })
  };
  
  render() {
    return (
      <div>
        <h2>TESTING</h2>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(DataLog);
