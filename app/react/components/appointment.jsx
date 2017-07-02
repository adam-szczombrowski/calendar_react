import React from 'react';

class Appointment extends React.Component {
  render() {
    return (
      <li>{this.props.appointment.name} on {this.props.appointment.date}</li>
    )
  }
}

export default Appointment;
