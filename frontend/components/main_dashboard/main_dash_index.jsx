import React from 'react';
import HeaderNav from '../header_nav/header_nav_container';
import SideBarNav from '../sidebar_nav/sidebar_nav';
import HomeIndex from '../home/home_index_container';
import PlaylistDetail from '../playlists/playlist_detail_container';
import { Switch } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';

const MainDashboardIndex = ({ currentUser, logout }) => (
  <div className="main-dash-container">
    <div className="main-dash-sidebar">
      <SideBarNav />
    </div>

    <div className="main-dash-content"> 
      <HeaderNav />
      <Switch>
        <ProtectedRoute path="/home" component={HomeIndex} />
        <ProtectedRoute path="/playlist/:playlistId" component={PlaylistDetail} /> 
      </Switch>
    </div>  
  </div>
);
 
export default MainDashboardIndex;