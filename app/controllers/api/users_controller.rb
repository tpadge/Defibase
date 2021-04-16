class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      @user.holdings.create(name: 'ethereum', quantity: 32)
      @user.holdings.create(name: 'bitcoin', quantity: 1)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  # def update //update holdings eventually
  #   @user = User.find(params[:id])
  #   if @user.update(user_params)
  #     redirect_to user_url(@user)
  #   else
  #     render json: @user.errors.full_messages, status: 422
  #   end
  # end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
