Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post 'api/test', to: 'application#test'

  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resources :songs, only: [:index, :show, :update, :create, :destroy, :search]
    resource :session, only: [:show, :create, :destroy]
    resources :albums, only: [:index, :show, :search]
    resources :artists, only: [:index, :show, :search]
    resources :playlists, only: [:index, :show, :create, :update, :destroy, :search]
    resources :playlist_songs, only: [:index, :show, :create, :destroy]
  end


  get '*path', to: "static_pages#frontend_index"
end
