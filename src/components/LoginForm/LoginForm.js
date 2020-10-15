import React, { Component } from 'react';
import { connect } from 'react-redux';
import {HashRouter, Link} from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';



//materialUI & styling
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import "./LoginForm.css";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


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
            <div className="login-div">
            <form>
            <h2 id="login-title">Login</h2>
                  <div className="username-login">
                    <TextField 
                            error={this.state.error}
                            helperText={this.state.helperText}
                            name="username"
                            required
                            fullWidth
                            variant="outlined"
                            value={this.state.username}
                            label="Username"
                            onChange={this.handleInputChangeFor('username')}
                          />
                  </div>
                  <div className="password-login">
                    <TextField
                            error={this.state.error}
                            helperText={this.state.helperText}
                            name="password"
                            required
                            fullWidth
                            variant="outlined"
                            value={this.state.password}
                            label="Password"
                            onChange={this.handleInputChangeFor('password')}
                          />
                  </div>
                <div id="login-form-buttons">
                  <Link to="/registrationinfo" className="registration-link">
                    <Button
                        id="register-btn"
                        startIcon ={<ArrowBackIcon/>}
                        >Register
                    </Button>
                  </Link>


                  <Button 
                        id="login-btn"
                        endIcon ={<ArrowForwardIcon/>}
                        onClick={this.login}>
                        Login
                  </Button>
                </div>
              </form>
            </div>    
      </HashRouter>
    );
  }
} //end render

export default connect(mapStoreToProps)(LoginForm);


//sources: https://stackoverflow.com/questions/49421792/how-to-use-material-uinext-textfield-error-props
//sources: https://stackoverflow.com/questions/35901440/how-to-invalidate-a-textfield-in-material-ui