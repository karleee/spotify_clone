import React from 'react';
import HeaderNavContainer from './header_nav/header_nav_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <HeaderNavContainer />
      <h1>Spotify</h1>
    </header>

    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;