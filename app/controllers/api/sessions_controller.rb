class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:loginCredentials],
      params[:user][:password] 
    )  

    if @user 
      log_in(@user)
      render "api/users/show"
    else 
      render json: ["Incorrect username or password."], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      log_out
      render "api/users/show" 
    else
      render json: [], status: 404
    end
  end
end
