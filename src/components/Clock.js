import React from 'react';

export default class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = { time: new Date() };
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
    const difference = this.state.time.getTimezoneOffset() + this.props.zone * 60;
    return new Date(this.state.time.getTime() + difference * 60 * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <li className="clock-box" id={this.props.id}>
        <div className="title-area">
          <span className="clock-title">{this.props.title}</span>
          <button className="close-btn" onClick={() => this.props.removeClock(this.props.id)}>&#10008;</button>
        </div>
        <div className="clock">{this.converterTime().toLocaleTimeString()}</div>
      </li>
    )
  }  
}
