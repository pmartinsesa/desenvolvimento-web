Rails.application.routes.draw do
  root to: "main#home"
  
  resources :products_storages
  resources :products
  resources :contracts
  resources :employees
  resources :storages

end
