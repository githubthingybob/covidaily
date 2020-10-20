import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


class LogOutButton extends Component {
  logout = ()=>{
    this.props.dispatch({ 
      type: 'LOGOUT' 
    });
  }
  

  render() {
    return (
      <>
        <span onClick={this.logout}>Log Out</span>
      </>
    );
  }
}

export default connect(mapStoreToProps)(LogOutButton);

