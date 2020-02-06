import React from 'react';
import HeaderNav from '../header_nav/header_nav_container';
import SideBarNav from '../sidebar_nav/sidebar_nav';
import HomeIndex from '../home/home_index_container';
import PlaylistDetail from '../playlists/playlist_detail_container';
import UserIndex from '../users/user_index_container';
import { Switch } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import AudioPlayer from '../audio_player/audio_player_container';

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
        <ProtectedRoute path="/users/:userId" component={UserIndex} />     
        {/* <ProtectedRoute path="/search" component={SearchContainer} /> */}
      </Switch>
    </div>  

    <ProtectedRoute path="/" component={AudioPlayer} />
  </div>
);
 
export default MainDashboardIndex;