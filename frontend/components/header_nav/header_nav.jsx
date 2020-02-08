import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNav = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div className="session-header-wrapper">
      <div className="image">
        <Link to="/"><img src={window.whiteLogo} /></Link> 
        <h1>Fikafy</h1>
      </div>

      <div className="links">
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </div>
    </div>
  );

  const personalLinks = () => (
    <div className="session-header-wrapper">
      <div className="upgrade-button"><a href="https://www.spotify.com/us/premium/">Upgrade</a></div>
      <button className="logout-button" onClick={logout}>Log Out</button>
    </div>
  );

  return currentUser ? personalLinks() : sessionLinks();
};


export default HeaderNav;
