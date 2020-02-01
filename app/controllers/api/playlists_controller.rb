class Api::PlaylistsController < ApplicationController
  def index
    @playlists = Playlist.all
    render :index
  end

  def create
    @playlist = Playlist.new(playlist_params) 

    if @playlist.save!
      render :show
    else
      render json: @playlist.errors.full_messages, status: 401
    end
  end


  def show
    @playlist = Playlist.find(params[:id])
  end

  def destroy
    @playlist = Playlist.find(params[:id])
    @playlist.destroy
    render :show
  end

  private

  def playlist_params
    params.require(:playlist).permit(:title, :user_id, :playlist_type) 
  end
end