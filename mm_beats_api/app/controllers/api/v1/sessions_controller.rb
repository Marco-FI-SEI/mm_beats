class Api::V1::SessionsController < ApplicationController
  # sets current user from session before all actions
  include CurrentUserConcern

  def create
    # authenticate provided by has_Secure_password macro in User
    user = User.find_by!(email: params["user"]["email"])
                .try(:authenticate, params["user"]["password"])

    # store user_id in session if user authenticated
    if user
      session[:user_id] = user.id
      json_response(object: user, status: :created)
    end
  end

  def logged_in
    if @current_user
      json_response(object: @current_user, logged_in: true)
    else
      render json: { logged_in: false }
    end
  end

  def logout
    reset_session
    render json: { status: :ok, logged_out: true }
  end
end
