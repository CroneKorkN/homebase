Rails.application.routes.draw do
  resources :measurements

  resources :sensors, shallow: true do
    resources :measurements
  end

  root to: 'sensors#index'
end
