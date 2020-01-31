import React from 'react';
import HeaderNav from '../header_nav/header_nav_container';
import SideBarNav from '../sidebar_nav/sidebar_nav';
import HeavyRotationIndex from '../heavy_rotation/heavy_rotation_index_container';
import HeavyRotationDetail from '../heavy_rotation/heavy_rotation_detail_container';
import { Switch } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';

const SpotifyIndex = ({ currentUser, logout }) => (
  <div className="home-index-container">
    <SideBarNav />
    <div className="home-index-main-content">
      <HeaderNav />
      <Switch>
        <ProtectedRoute path="/home" component={HeavyRotationIndex} />
        <ProtectedRoute path="/playlist/:playlistId" component={HeavyRotationDetail} />
      </Switch>
    </div>  
  </div>
);
 
export default SpotifyIndex;