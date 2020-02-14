class Api::V1::HeadphonesController < ApplicationController
  before_action :set_headphone, only: [:show, :update, :destroy]

  def index
    headphones = Headphone.all
    json_response(object: headphones)
  end

  def create
    headphone = Headphone.create!(headphone_params)

    if headphone
      json_response(
        object: headphone,
        message: "Headphone saved!",
        status: :created
      )
    end
  end

  def show
    json_response(object: headphone)
  end

  def update
    headphone.update(headphone_params)
    head :no_content
  end

  def destroy
    headphone.destroy
    head :no_content
  end

  private

  def set_headphone
    headphone = Headphone.find(params["headphone"]["id"])
  end

  def headphone_params
    params.require("headphone").permit(
      "model",
      "manufacturer",
      "body_type",
      "driver_type",
      "release_year",
      "star_rating",
      "price"
    )
  end
end
