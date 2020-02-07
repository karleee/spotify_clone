import React from 'react';
import HeaderNavContainer from '../header_nav/header_nav_container';
import { Link } from 'react-router-dom';

const Splash = () => (
  <div className="splash-wrapper">
    <div className="overlay"></div>

    <HeaderNavContainer />

    <div className="splash-text-container">
      <h1>Music for everyone.</h1>
      <p>Millions of songs. No credit card needed.</p>
      <Link to="/signup">{'Get Fikafy Free'.toUpperCase()}</Link> 
    </div>
  </div>
);

export default Splash; 