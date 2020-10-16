import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {HashRouter, Link} from 'react-router-dom';
import { Button } from '@material-ui/core';


class RegisterConfirm extends Component {

  render() {
    return (
      <HashRouter>
      <div>
        <h3 className="register-confirm-h3">Congratulations</h3>
        <h3 className="register-confirm-h3">You've created an account!</h3>

        <Link to="/account"><Button>Finish Your Profile</Button></Link>
        <Link to="/dailylogger"><Button></Button></Link>
      </div>
      </HashRouter>
    );
  }
}

export default connect(mapStoreToProps)(RegisterConfirm);
