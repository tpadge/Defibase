class Api::HoldingsController < ApplicationController

  def show
    @holding = Holding.find(params[:id])
    render :show
  end

  def index
    @holdings = Holding.all
    render :index
  end

  def create  
    @holding = Holding.new(holding_params)
    if @holding.save!
      render :show
    else
      render json: @holding.errors.full_messages, status: 422
    end
  end

  def update
    @holding = Holding.find(params[:id])
    starting_size = @holding.quantity
    @holding.quantity = params[:quantity]

    if @holding.save
      render :show
    else
      render json: ["Insufficient funds, check your numbers"], status: 422
    end
  end

  def destroy
    @holding = Holding.find(params[:id])
    @holding.delete
    render :show
  end

  private
  def holding_params
    params.require(:holding).permit(:name, :quantity, :user_id)
  end

end
