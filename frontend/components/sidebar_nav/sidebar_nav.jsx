import React from 'react';
import { Link } from 'react-router-dom';

class SideBarNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebar-container"> 
        <div className="sidebar-header">
          <Link to="/home"><img src={ whiteLogo } /></Link>
        </div>

        <div className="sidebar-content">
          <div className="home-wrapper">
            <Link to="/home">
              <i id="home-icon"></i> 
              <p>Home</p>
            </Link> 
          </div>

          <div className="search-wrapper">
            <Link to="/search">
              <i id="search-icon"></i>
              <p>Search</p>
            </Link> 
          </div>
        </div>
      </div>
    );
  }
}

export default SideBarNav;