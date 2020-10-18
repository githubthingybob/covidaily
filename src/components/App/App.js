import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

import Nav from '../Nav/Nav';
import ProtectedRoute from '../DoNotTouch/ProtectedRoute/ProtectedRoute';
import AboutPage from '../AboutPage/AboutPage';
import Account from '../Account/Account';
import AccountUpdate from '../AccountUpdate/AccountUpdate'
import Resources from '../Resources/Resources';
import HomeNotLoggedIn from '../HomeNotLoggedIn/HomeNotLoggedIn';
import HomeLoggedIn from '../HomeLoggedIn/HomeLoggedIn';
import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';
import RegisterDirect from '../RegisterDirect/RegisterDirect'
import RegistrationInfo from '../RegistrationInfo/RegistrationInfo'
import DailyLogger from '../DailyLogger/DailyLogger';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' });
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />

            {/* Regular Routes */}
            <Route
              exact
              path="/about"
              component={AboutPage}
            />
            <Route
              exact
              path="/resources"
              component={Resources}
            />

            <Route
              exact
              path="/registrationinfo"
              component={RegistrationInfo}
            />
            {/* Protected Routes without authRedirect*/}
            <ProtectedRoute
              exact
              path="/dailylogger"
              component={DailyLogger}
            />

            <ProtectedRoute
              exact
              path="/account"
              component={Account}
            />

            <ProtectedRoute
              exact
              path="/accountupdate"
              component={AccountUpdate}
            />

            <ProtectedRoute
              exact
              path="/main"
              component={HomeLoggedIn}
            />

            <ProtectedRoute
              exact
              path="/registerdirect"
              component={RegisterDirect}
            />

            {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}
            <ProtectedRoute
              exact
              path="/login"
              component={LoginForm}
              authRedirect="/main"
            />

            <ProtectedRoute
              exact
              path="/registration"
              component={RegisterForm}
              authRedirect="/registerdirect"
            />

            <ProtectedRoute
              exact
              path="/home"
              component={HomeNotLoggedIn}
              authRedirect="/main"
            />

            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          
        </div>
      </Router>
    );
  }
}

export default connect()(App);
