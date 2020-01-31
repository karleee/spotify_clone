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
            <img src={ whiteLogo } />
          </div>

          <div className="sidebar-nav-main-links">
            <Link to="/home">Home</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBarNav;