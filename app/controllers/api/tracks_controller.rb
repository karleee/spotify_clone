class Api::TracksController < ApplicationController
  def index
    @tracks = Track.all
    render :index
  end

  def show
    @track = Track.find(params[:id])
    render :show
  end

  def create
    @track = Track.new(track_params)
    if @track.save
      render :show
    else
      render json: @track.errors.full_messages, status: 401
    end
  end

  private

  def track_params
    params.require(:track).permit(:title, :album_id, :artist_id, :ord);
  end
end