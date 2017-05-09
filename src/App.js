import React, { Component } from 'react'

import ThingList from './ThingList'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      things: { }
    }
  }

  saveThing = (thing) => {
    const things = {...this.state.things}
    things[thing.id] = thing
    this.setState({ things })
  }

  removeThing = (thing) => {
    const things = {...this.state.things}
    delete things[thing.id]
    // things[thing.id] = null
    this.setState({ things })
  }

  thing = ({name, completed}) => {
    return {
      id: `thing-${Date.now()}`,
      name,
      completed,
    }
  }
  
  addThing = () => {
    const things = {...this.state.things}
    const thing = this.thing({ name: 'Enter a thing' })
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
