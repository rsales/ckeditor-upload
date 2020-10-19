Rails.application.routes.draw do
  root to: 'landing#index'
  get '/*path', to: 'application#index' 
end
