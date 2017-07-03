import React from 'react';
var moment = require('moment-timezone');

class Appointment extends React.Component {

  formatDate(d) {
    return moment(d).format('MMMM DD YYYY, h:mm:ss a');
  };

  render() {
    const appointment = this.props.appointment;

    return (
      <li className="appointment">
        <p className="appointment-name">{appointment.name}</p>
        <p>{this.formatDate(appointment.date)}</p>
      </li>
    )
  }
}

export default Appointment;
