import React from 'react';
import { Link } from 'react-router-dom';

class SideBarNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebar-nav-container"> 
        <div className="sidebar-nav-main-content">
          <div className="sidebar-nav-header">
            <Link to="/home"><img src={ whiteLogo } /></Link>
          </div>

          <div className="sidebar-nav-main-links">
            <div id="home-link">
              <Link to="/home">
                <i id="home-icon"></i> 
                <p>Home</p>
              </Link> 
            </div>

            <Link to="/search">
              <i></i>
              <p>Search</p>
            </Link> 
          </div>
        </div>
      </div>
    );
  }
}

export default SideBarNav;