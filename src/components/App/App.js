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

            {/* Visiting localhost:3000/about will show the about page. */}
            <Route
              // shows AboutPage at all times (logged in or not)
              exact
              path="/about"
              component={AboutPage}
            />

            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
            <ProtectedRoute
              // logged in shows UserPage else shows LoginPage
              exact
              path="/dailylogger"
              component={DailyLogger}
            />

            <ProtectedRoute
              exact
              path="/account"
              component={Account}
              authRedirect
            />

            <ProtectedRoute
              exact
              path="/accountupdate"
              component={AccountUpdate}
            />

            <ProtectedRoute
              exact
              path="/registerdirect"
              component={RegisterDirect}
            />

            <Route
              exact
              path="/resources"
              component={Resources}
            />

            <Route
              exact
              path="/registration"
              component={RegisterForm}
            />

            <Route
              exact
              path="/registrationinfo"
              component={RegistrationInfo}
            />

            {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}
            <Route
              exact
              path="/login"
              component={LoginForm}
            />

            <Route
              exact
              path="/home"
              component={HomeNotLoggedIn}
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
