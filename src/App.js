import React, { Component } from 'react'

import ThingList from './ThingList'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      things: {
        'thing-1': { id: 'thing-1', name: 'Milk', completed: false },
        'thing-2': { id: 'thing-2', name: 'Bread', completed: true },
        'thing-3': { id: 'thing-3', name: 'Bibb lettuce', completed: false },
      }
    }
  }

  saveThing = (thing) => {
    const things = {...this.state.things}
    things[thing.id] = thing
    this.setState({ things })
  }

  render() {
    const actions = {
      saveThing: this.saveThing,
    }
    return (
      <div className="App">
        <h1>ThingList</h1>
        <h2>So Many Things</h2>
        <ThingList {...this.state} {...actions} />
      </div>
    );
  }
}

export default App;