class Api::TrackedCoinsController < ApplicationController

  def index
    @tracked_coins = TrackedCoin.all
    render :index
  end

  def create
    @tracked_coin = TrackedCoin.create(tracked_coin_params)
    @tracked_coin.save!
    render :show
  end

  def destroy
    @tracked_coin = TrackedCoin.find(params[:id])
    @tracked_coin.delete
    render :show
  end

  private

  def tracked_coin_params
    params.require(:coin).permit(:name, :user_id)
  end

end
