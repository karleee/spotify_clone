class Api::ArtistPlaylistsController < ApplicationController
  def index
    @artist_playlists = ArtistPlaylist.all 
    render :index
  end

  def create
    @artist_laylist = ArtistPlaylist.new(artist_playlist_params)   

    if @artist_playlist.save!
      render :show
    else
      render json: @artist_playlist.errors.full_messages, status: 401
    end 
  end 

  def show
    @artist_playlist = ArtistPlaylist.find(params[:id])
    render :show
  end

  def destroy
    @artist_playlist = ArtistPlaylist.find(params[:id])
    @artist_playlist.destroy
    render :show
  end

  private

  def artist_playlist_params
    params.require(:artist_playlist).permit(:title, :artist_id) 
  end
end