class Api::ArtistsController < ApplicationController
  def index
    @artists = Artist.all
    render :index
  end

  def create
    @artist = Artist.new(artist_params)

    if @artist.save
      render :show
    else
      render json: @artist.errors.full_messages, status: 401
    end
  end

  def show
    @artist = Artist.find(params[:id])
    render :show
  end

  private

  def artist_params
    params.require(:artist).permit(:name)
  end
end