import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

class DataEditItem extends Component {
  componentDidMount=()=>{
    this.props.dispatch({
      type: 'FETCH_LOGS',
      payload: this.props.store.user.id
    })
  };

  render() {
    return (
      <div>
        <h2>{this.state.heading}</h2>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(DataEditItem);

