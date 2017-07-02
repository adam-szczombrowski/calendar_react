class AppointmentsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @appointments = Appointment.order(:date)
  end

  def create
    @app = Appointment.create(appointment_params)
    render json: @app
  end

  private

  def appointment_params
    params.require(:appointment).permit(:name, :date)
  end
end
