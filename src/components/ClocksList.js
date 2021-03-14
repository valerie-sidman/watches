import React from 'react';

import Clock from './Clock.js';

export default function ClocksList(props) {
  return (
    <ul className="clocks-list">
      {
        props.clocks.map((clock) => <Clock key={clock.id} {...clock} removeClock={(id) => props.removeClock(id)} />)
      }
    </ul>
  )
}
