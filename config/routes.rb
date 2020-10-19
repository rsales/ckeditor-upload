Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :posts
    end
  end

  root to: 'landing#index'
  get '/*path', to: 'landing#index', format: false
end
