class Api::V1::SessionsController < ApplicationController
  def create
    user = User.create!(
      first_name: params["user"]["user"]["first_name"],
      last_name: params["user"]["last_name"],
      username: params["user"]["username"],
      email: params["user"]["email"],
      password: params["user"]["password"],
      password_confirmation: params["user"]["password_confirmation"]
      location: params["user"]["location"]
      experience: params["user"]["experience"]
      bio: params["user"]["bio"]
    )

    if user
      session[:user_id] = user.id
      json_response(object: user, status: :created)
    end
  end
end
