import React from 'react';
import Splash from './splash/splash';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import HomeIndexContainer from './home/home_index_container';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="app-container">
    <Switch>
      <Route exact path="/" component={Splash} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/home" component={HomeIndexContainer} />
    </Switch>
  </div>
);

export default App;