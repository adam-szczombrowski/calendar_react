import React from 'react';
import Appointment from './appointment';

class AppointmentsList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.appointments.map(app => <Appointment key={app.id} appointment={app} />)}
      </ul>
    )
  }
}

export default AppointmentsList;
