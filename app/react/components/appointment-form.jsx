import React from 'react';
import Datetime from 'react-datetime';
import Appointments from './appointments';
var moment = require('moment-timezone');

class AppointmentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      date: moment().tz('Europe/Warsaw'),
      name: '',
    }

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit     = this.handleSubmit.bind(this);
  }

  handleDateChange(current_date) {
    this.setState({
      date: current_date.tz('Europe/Warsaw')
    })
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit(e) {
    const appointment = { name: this.state.name, date: this.state.date }
    var that = this;
    fetch('/appointments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        appointment: appointment
      })
    }).then(function(response){
      return response.json()
    }).then(function(json){
      that.props.addAppointment(json)
    })
    e.preventDefault();
  }

  render() {
    const { date, name } = this.state;

    return (
      <div className="appointment-form">
        <form onSubmit={this.handleSubmit}>
          <input placeholder="appointment name" className="center-block name-input" type="text" onChange={this.handleNameChange}></input>
          <Datetime value={date} dateFormat={"dddd, MMMM Do YYYY, h:mm:ss a"} input={false} open={true} onChange={this.handleDateChange}/>
          <input type="submit" value="Make appointment" className="btn btn-success center-block submit-button"/>
        </form>
      </div>
    )
  }
}

export default AppointmentForm;
