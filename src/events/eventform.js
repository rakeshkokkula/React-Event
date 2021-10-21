import React from "react";
import { Component } from "react";
import "./eventform.css";

class Eventform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      date: "",
      time: "",
    };
    this.OnFieldChange = this.OnFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handledate = this.handledate.bind(this);
    this.handletime = this.handletime.bind(this);
    //  this.handleClick=this.handleClick.bind(this);
  }

  OnFieldChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handledate(event) {
    this.setState({
      date: event.target.value,
    });
  }
  handletime(event) {
    this.setState({
      time: event.target.value,
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state, "formState");
    this.props.parentCallback(this.state);
    this.setState({ title: "", description: "", date: "", time: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="Event_Form">
          <div className="Event_Input">
            <label htmlFor="Title">Event Title</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              placeholder="Event Title"
              onChange={this.OnFieldChange}
              required
            ></input>
          </div>
          <div className="Event_Input">
            <label htmlFor="Descritpion">Event Description</label>
            <textarea
              name="description"
              value={this.state.description}
              onChange={this.OnFieldChange}
              placeholder="Event Description"
            />
          </div>
          <div className="Event_Input">
            <label htmlFor="Date">Date of Event</label>
            <input
              type="date"
              placeholder="MM/DD/YYYY"
              value={this.state.date}
              onChange={this.handledate}
              required
            ></input>
          </div>
          <div className="Event_Input">
            <label>Time</label>
            <input
              type="time"
              value={this.state.time}
              onChange={this.handletime}
              required
            ></input>
          </div>
          <button type="submit" className="btn btn-primary">
            ADD Event
          </button>
        </div>
      </form>
    );
  }
}
export default Eventform;
