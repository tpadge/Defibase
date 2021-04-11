class Api::CoinsController < ApplicationController

  def index
    @coins = coin.all
    render :index
  end

  def show
    @coin = coin.find_by(coin_params)
    render :show
  end

  private

  def coin_params
    params.require(:coin).permit(:symbol)
  end

 
end
