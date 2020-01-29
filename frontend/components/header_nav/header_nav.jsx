import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNav = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login">Log In</Link>
      <Link to="/signup">Sign Up</Link>
    </nav>
  );

  const personalLinks = () => (
    <hgroup className="header-group">
      <a href="https://www.spotify.com/us/premium/">Upgrade</a>
      <button className="logout-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalLinks() : sessionLinks();
};


export default HeaderNav;
