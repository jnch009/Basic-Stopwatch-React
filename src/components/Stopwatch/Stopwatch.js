import React from "react";
import sID from "shortid";
import "./Stopwatch.css";

const maxSecondOrMinute = 59;

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      intervalID: "",
      startVisible: true,
      lapTimes: [],
      lapsVisibility: false
    };

    this.handleStart = this.handleStart.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleAddLap = this.handleAddLap.bind(this);
  }

  handleStart() {
    this.setState({
      startVisible: false
    });
    let interval = setInterval(() => {
      if (this.state.minutes === maxSecondOrMinute) {
        this.setState({
          hours: this.state.hours + 1,
          minutes: 0
        });
      }
      if (this.state.seconds === maxSecondOrMinute) {
        this.setState({
          minutes: this.state.minutes + 1,
          seconds: 0
        });
      } else {
        this.setState({
          seconds: this.state.seconds + 1
        });
      }
    }, 1000);

    this.setState({ intervalID: interval });
  }

  handleStop() {
    clearInterval(this.state.intervalID);
    this.setState({
      startVisible: true
    });
  }

  handleReset() {
    this.setState({
      seconds: 0,
      minutes: 0,
      hours: 0
    });
  }

  handleAddLap() {
    this.setState(state => {
      const lapTimes = [
        ...state.lapTimes,
        { hours: state.hours, minutes: state.minutes, seconds: state.seconds }
      ];
      return {
        lapTimes,
        lapsVisibility: true,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    });
  }

  toDoubleDigit(digit) {
    return digit < 10 ? `0${digit}` : digit;
  }

  render() {
    return (
      <>
        <div className="startWatchContainer">
          <div className="startWatch">
            <h1 className="timeDisplay">
              {this.toDoubleDigit(this.state.hours)}:
              {this.toDoubleDigit(this.state.minutes)}:
              {this.toDoubleDigit(this.state.seconds)}
            </h1>
            {this.state.lapsVisibility ? (
              <ul className="lapTimes">
                {this.state.lapTimes.map(item => (
                  <li key={sID.generate()}>
                    {this.toDoubleDigit(item.hours)}:
                    {this.toDoubleDigit(item.minutes)}:
                    {this.toDoubleDigit(item.seconds)}
                  </li>
                ))}
              </ul>
            ) : null}
            <div className="watchButtons">
              {this.state.startVisible ? (
                <button className="start" onClick={this.handleStart}>
                  Start
                </button>
              ) : (
                <button className="stop" onClick={this.handleStop}>
                  Stop
                </button>
              )}
              <button onClick={this.handleReset}>Reset</button>
              <button onClick={this.handleAddLap}>Add Lap</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
