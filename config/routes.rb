Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: :create
    resource :session, only: [:create, :destroy, :show]
    resources :tracks, only: [:create, :index, :show]
    resources :albums, only: [:create, :show, :index]
    resources :playlists, only: [:create, :show, :index, :destroy]
  end
  
  root "static_pages#root"
end
