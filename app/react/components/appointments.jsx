import React from 'react';
import AppointmentForm from './appointment-form';
import AppointmentsList from './appointments-list';

class Appointments extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      appointments: props.appointments,
    }

    this.addAppointment = this.addAppointment.bind(this);
  }

  addAppointment(app) {
    this.setState({
      appointments: this.state.appointments.concat([app])
    })
  }

  render() {
    return (
      <div>
        <AppointmentForm addAppointment={this.addAppointment} />
        <AppointmentsList appointments={this.state.appointments} />
      </div>
    )
  }
}

export default Appointments;
