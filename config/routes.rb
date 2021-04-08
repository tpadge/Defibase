Rails.application.routes.draw do
    namespace :api, defaults: {format: :json} do
        resource :user, only: [:create, :update]
        resource :session, only: [:create, :destroy]
        resources :coins, only: [:show, :index]
    end

    root "static_pages#root"
end
