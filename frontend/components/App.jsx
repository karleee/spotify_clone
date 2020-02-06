import React from 'react';
import Splash from './splash/splash';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import MainDashboardIndex from './main_dashboard/main_dashboard_index_container';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="app-container">
    <Switch>
      <AuthRoute exact path="/welcome" component={Splash} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} /> 
      <ProtectedRoute path="/" component={MainDashboardIndex} /> 
    </Switch>
  </div>
);

export default App;