import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter} from 'react-router-dom';

class LogOutButton extends Component {
  logout = ()=>{
    this.props.dispatch({ 
      type: 'LOGOUT' 
    });
    this.props.history.push('/home')
  }
  

  render() {
    return (
      <>
        <button onClick={this.logout}>Log Out</button>
      </>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(LogOutButton));

