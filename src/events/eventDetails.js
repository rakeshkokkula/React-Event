import React, { Component } from "react";
import "./App.css";
import Eventform from "./eventform";

class EventDetails extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
  }
  callbackFunction = (childData) => {
    console.log(childData, "childData");
    this.setState((prevstate) => ({
      list: [...prevstate.list, childData],
    }));
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      const updatedList = this.state.list.map((item, index) => {
        const tempDate = new Date();
        const combineddate = Date.parse(`${item.date}T${item.time}`);
        let ddate = tempDate.valueOf();

        if (combineddate < ddate) {
          item.completed = true;
        }
        return item;
      });
      console.log(updatedList);
      this.setState({ list: updatedList });
    }, 1000);
  }

  componentWillUnmount() {
    this.setState({ list: [] });
    clearInterval(this.timer);
  }

  render() {
    console.log(this.state.list);
    return (
      <div className="App">
        <h1>Event Form</h1>
        <Eventform parentCallback={this.callbackFunction} />
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <li key={index}>
                <p
                  className={
                    item.completed ? "background-red" : "background-green"
                  }
                >
                  {" "}
                  Event {item.title} is Scheduled on {item.date} at {item.time}.
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default EventDetails;
