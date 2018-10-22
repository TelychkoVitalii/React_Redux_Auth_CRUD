import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from '../../utils/PrivateRoute';
import { history } from "../../utils/history";
import RegistrationPage from '../RegistrationPage/RegistrationPage';
import LoginPage from '../LoginPage/LoginPage';
import HomePage from '../HomePage/HomePage';

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute exact path='/' component={ HomePage } />
        <Route exact path='/register' component={ RegistrationPage }/>
        <Route exact path='/login' component={ LoginPage }/>
      </Switch>
    </Router>
  );
}

