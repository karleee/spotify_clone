import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNav = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="session-header-new">
      <Link to="/"><img src={window.whiteLogo} /></Link>
      <div className="session-links">
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </div>
    </nav>
  );

  const personalLinks = () => (
    <nav className="session-header-returning">
      <div className="session-links">
        <a href="https://www.spotify.com/us/premium/">Upgrade</a>
        <button className="logout-button" onClick={logout}>Log Out</button>
      </div>
    </nav>
  );

  return currentUser ? personalLinks() : sessionLinks();
};


export default HeaderNav;
