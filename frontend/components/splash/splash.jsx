import React from 'react';
import { Link } from 'react-router-dom';

import HeaderNavContainer from '../header_nav/header_nav_container';
import Footer from '../footer/footer';

const Splash = () => (
  <div className="splash-wrapper">
    <div className="overlay"></div>

    <HeaderNavContainer />
 
    <div className="splash-text-container">
      <h1>Music for everyone.</h1>
      <p>Millions of songs. No credit card needed.</p>
      <Link to="/signup">{'Get Fikafy Free'.toUpperCase()}</Link> 
    </div>

    <Footer /> 
  </div>
);

export default Splash; 