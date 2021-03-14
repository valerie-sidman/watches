import React from 'react';

export default class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = { time: new Date()};
    this.title = props.title;
    this.zone = props.zone;
    this.id = props.id;
    this.removeClock = props.removeClock;
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), 1000
    );
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }

  converterTime() {
    const difference = this.state.time.getTimezoneOffset() + this.zone * 60;
    return new Date(this.state.time.getTime() + difference * 60 * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <li className="clock-box" id={this.id}>
        <div className="title-area">
          <span className="clock-title">{this.title}</span>
          <button className="close-btn" onClick={() => this.removeClock(this.id)}>&#10008;</button>
        </div>
        <div className="clock">{this.converterTime().toLocaleTimeString()}</div>
      </li>
    )
  }  
}
