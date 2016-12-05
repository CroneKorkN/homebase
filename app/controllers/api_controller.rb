class ApiController < ApplicationController
  def create_measurement
    Sensor.find_or_create_by(
      identifier: params[:sensor_identifier].trim
    ).create_measurement(
      value: params[:value],
      date: params[:date] || DateTime.now
    )
  end
end
