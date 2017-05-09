import React, { Component } from 'react'

import ThingList from './ThingList'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      things: {
        'thing-1': { id: 'thing-1', name: 'Milk' },
        'thing-2': { id: 'thing-2', name: 'Bread' },
        'thing-3': { id: 'thing-3', name: 'Bibb lettuce' },
      }
    }
  }

  render() {
    return (
      <div className="App">
        <h1>ThingList</h1>
        <h2>So Many Things</h2>
        <ThingList {...this.state} />
      </div>
    );
  }
}

export default App;
