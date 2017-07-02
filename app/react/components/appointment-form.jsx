import React from 'react';
import Datetime from 'react-datetime';
import Appointments from './appointments';
var moment = require('moment');

class AppointmentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      date: moment(),
      name: '',
    }

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit     = this.handleSubmit.bind(this);
  }

  handleDateChange(current_date) {
    this.setState({
      date: current_date
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
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="name" type="text" value={this.state.name} onChange={this.handleNameChange}></input>
          <Datetime name={"date"} input={false} open={true} onChange={this.handleDateChange}/>
          <input type="submit" value="Make appointment"/>
        </form>
      </div>
    )
  }
}

export default AppointmentForm;
