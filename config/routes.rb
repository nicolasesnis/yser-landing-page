Rails.application.routes.draw do
  root "static#index"
  get '/main', to: "static#main", as: :main
  get '/.well-known/acme-challenge/q-0NaguePCP8_318V1lPxWIl1IcgGAKIkhAD_T5VdBw', to: "pages#letsencrypt"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
