import React, { Component } from 'react';
import { connect } from 'react-redux';
import {HashRouter, Link} from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';



//materialUI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class LoginForm extends Component {
  state = {
        username: '',
        password: '',
        helperText: '',
        error: false
  }; //end state

  login = (event) => {
            event.preventDefault();

            if (this.state.username.length>2 && this.state.password.length>2) {
                  this.props.dispatch({
                    type: 'LOGIN',
                    payload: {
                      username: this.state.username,
                      password: this.state.password,
                    },
                  });
            } else {
                  this.setState({
                    helperText: 'Required',
                    error: true
                  })
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
      <div>
        <form>
        <h2>Login</h2>
        <div>
          <TextField 
                  error={this.state.error}
                  helperText={this.state.helperText}
                  name="username"
                  required
                  variant="outlined"
                  value={this.state.username}
                  onChange={this.handleInputChangeFor('username')}
                />
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
          <Link to="/registration"><Button>Register</Button></Link>
          <Button onClick={this.login}>Login</Button>
          </form>
      </div>    
      </HashRouter>
    );
  }
} //end render

export default connect(mapStoreToProps)(LoginForm);


//sources: https://stackoverflow.com/questions/49421792/how-to-use-material-uinext-textfield-error-props