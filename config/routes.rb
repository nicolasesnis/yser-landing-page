Rails.application.routes.draw do
  root "static#index"
  get '/main', to: "static#main"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
