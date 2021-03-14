import React from 'react';
import { nanoid } from 'nanoid';
import ClocksList from './ClocksList';

export default class Watches extends React.Component {

  constructor(props) {
    super(props);
    this.state = { clocks: [] };
  }

  addClock = (event) => {
    event.preventDefault();
    const nameFieldValue = event.target.parentElement.querySelector('.name-field').value;
    const zoneFieldValue = event.target.parentElement.querySelector('.zone-field').value;
    const clocks = this.state.clocks;
    clocks.push({
      title: nameFieldValue,
      zone: zoneFieldValue,
      id: nanoid()
    });
    this.setState({
      clocks: clocks
    });
  }

  removeClock = (id) => {
    const deleteIndex = this.state.clocks.findIndex((clock) => clock.id === id);
    this.state.clocks.splice(deleteIndex, 1);
    this.setState(prevForm => ({ ...prevForm }));
  }

  render() {
    return (
      <div className="main-container">
        <h1>Tick tock</h1>
        <form className="clock-form">
          <div className="name-box">
            <label className="title-field" htmlFor="name"></label>
            <input className="name-field field" id="name" />
          </div>
          <div className="zone-box">
            <label className="title-field" htmlFor="zone"></label>
            <input className="zone-field field" id="zone" />
          </div>
          <button className="adding-btn" type="submit" onClick={this.addClock}>Add</button>
        </form>
        <div className="clock-gallery">
          <ClocksList clocks={this.state.clocks} removeClock={(id) => this.removeClock(id)} />
        </div>
      </div>
    )
  }
}
