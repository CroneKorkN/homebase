Rails.application.routes.draw do
  root to: 'sensors#index'

  resources :sensors, shallow: true do
    resources :measurements
  end

  # api
  post '/measurement/:sensor_identifier/:date/:value', to: 'measurements#create'
end
