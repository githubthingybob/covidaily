import React, { Component } from 'react';
import { connect } from 'react-redux';
import {HashRouter, Link} from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';

//materialUI
import Button from '@material-ui/core/Button';

class LoginForm extends Component {
  state = {
        username: '',
        password: '',
  }; //end state

  login = (event) => {
            event.preventDefault();

            if (this.state.username && this.state.password) {
                  this.props.dispatch({
                    type: 'LOGIN',
                    payload: {
                      username: this.state.username,
                      password: this.state.password,
                    },
                  });
            } else {
                  this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
            }
  }; // end login

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }; //end handleInputChange

  render() {
    return (
      <HashRouter>
      <form className="formPanel" onSubmit={this.login}>
        <h2>Login</h2>
        {this.props.store.errors.loginMessage && (
          <h3 className="alert" role="alert">
            {this.props.store.errors.loginMessage}
          </h3>
        )}
        <div>
          <label htmlFor="username">
            Username:
                <input
                  type="text"
                  name="username"
                  required
                  value={this.state.username}
                  onChange={this.handleInputChangeFor('username')}
                />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
                <input
                  type="password"
                  name="password"
                  required
                  value={this.state.password}
                  onChange={this.handleInputChangeFor('password')}
                />
          </label>
        </div>
        <div>
          <Link to="/registration"><Button>Register</Button></Link>
          <Button onClick={this.login}>Login</Button>
        </div>
      </form>

      </HashRouter>
    );
  }
} //end render

export default connect(mapStoreToProps)(LoginForm);
