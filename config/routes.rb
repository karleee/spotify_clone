Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: :create
    resource :session, only: [:create, :show, :destroy]
    resources :artists, only: [:create, :index, :show]
    resources :tracks, only: [:create, :index, :show]
    resources :albums, only: [:create, :index, :show]
    resources :playlists, only: [:create, :index, :show, :destroy]
  end
  
  root "static_pages#root"
end
