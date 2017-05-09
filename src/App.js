import React, { Component } from 'react'

import ThingList from './ThingList'
import base from './base'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      things: { }
    }
  }

  componentWillMount() {
    this.ref = base.syncState(
      'things',
      {
        context: this,
        state: 'things',
      }
    )
  }

  saveThing = (thing) => {
    const things = {...this.state.things}
    things[thing.id] = thing
    this.setState({ things })
  }

  removeThing = (thing) => {
    const things = {...this.state.things}
    things[thing.id] = null
    this.setState({ things })
  }

  thing = () => {
    return {
      id: `thing-${Date.now()}`,
      name: '',
      completed: false,
    }
  }
  
  addThing = () => {
    const things = {...this.state.things}
    const thing = this.thing()
    things[thing.id] = thing
    this.setState({ things })
  }

  render() {
    const actions = {
      saveThing: this.saveThing,
      removeThing: this.removeThing,
    }
    return (
      <div className="App">
        <h1>ThingList</h1>
        <h2>So Many Things</h2>
        <button className="add-thing" onClick={this.addThing}>Add Thing</button>
        <ThingList {...this.state} {...actions} />
      </div>
    );
  }
}

export default App;
