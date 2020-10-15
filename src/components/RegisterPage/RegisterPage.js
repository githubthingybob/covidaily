import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

class RegisterPage extends Component {

  render() {
    return (
      <div>
        <RegisterForm />


        
      </div>
    );
  }
}

export default connect(mapStoreToProps)(RegisterPage);
