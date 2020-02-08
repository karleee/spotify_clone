import React from 'react';
import { Link } from 'react-router-dom';

class HeaderNav extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   volume: 1
    // }
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    // let currentTrack = null;
    // let nextTrack = null;
    // this.props.receiveCurrentTrack(currentTrack);
    // this.props.receiveNextTrack(nextTrack);
    // this.props.receiveVolume(1);
    // how to set the current state to null tracks?
    this.props.logout();
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
        <div className="upgrade-button"><a href="https://www.spotify.com/us/premium/">Upgrade</a></div>
        <button className="logout-button" onClick={this.handleLogout}>Log Out</button>
      </div>
    );

    return this.props.currentUser ? personalLinks() : sessionLinks();
    }
}

export default HeaderNav;
