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
    const appointments = this.state.appointments.concat([app])
    this.setState({
      appointments: appointments.sort(function(a,b){
        return new Date(a.date) - new Date(b.date);
      })
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
