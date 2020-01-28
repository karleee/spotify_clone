import React from 'react';
import {Link} from 'react-router-dom';

const HeaderNav = ({currentUser, logout}) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login">Log In</Link>
      <Link to="/signup">Sign Up</Link>
    </nav>
  );

  const personalLinks = () => (
    <nav className="upgrade-logout">
      <a href="https://www.spotify.com/us/premium/">Upgrade</a>
      <button className="logout-button" onClick={logout}>Log Out</button>
    </nav>
  );

  return currentUser ? personalLinks() : sessionLinks();
}

export default HeaderNav;