class Api::CoinsController < ApplicationController

  before_action :require_logged_in, only: [:create, :destroy]

  def index
    @coins = Coin.all
    render :index
  end

  def show
    @coin = Coin.find_by(coin_params)
    render :show
  end

  def create
    @coin = Coin.create(coin_params)
    render :index
  end

  def destroy
    @coin = Coin.find_by(coin_params)
    @coin = nil
  end

  private

  def coin_params
    params.require(:coin).permit(:name)
  end

 
end
