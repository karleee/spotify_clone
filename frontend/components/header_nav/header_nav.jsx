import React from 'react';
import { Link } from 'react-router-dom';

// const HeaderNav = ({ currentUser, logout }) => {
class HeaderNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
        <button className="logout-button" onClick={this.props.logout}>Log Out</button>
      </div>
    );

    return this.props.currentUser ? personalLinks() : sessionLinks();
  }
}

export default HeaderNav;