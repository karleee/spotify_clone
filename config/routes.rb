Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :show]
    resource :session, only: [:create, :show, :destroy]
    resources :artists, only: [:create, :index, :show]
    resources :tracks, only: [:create, :index, :show]
    resources :albums, only: [:create, :index, :show]
    resources :playlists, only: [:create, :index, :show, :destroy]
    resources :artist_playlists, only: [:create, :index, :show, :destroy] 
  end
  
  root "static_pages#root"
end
