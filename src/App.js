import React, { Component } from 'react'

import Login from './Login'
import ThingList from './ThingList'
import base from './base'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      things: { },
      uid: null,
    }
  }

  componentWillMount() {
    base.onAuth((user) => {
      if (user) {
        this.authHandler(null, { user });
      }
    })
  }

  setupThings = () => {
    if (!this.state.uid) return
    this.ref = base.syncState(
      `${this.state.uid}/things`,
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

  authHandler = (err, authData) => {
    if (err) {
      console.error(err);
      return;
    }
    this.setState({ uid: authData.user.uid })
    this.setupThings()
  }

  logout = () => {
    base.unauth();
    this.setState({ uid: null });
  }

  renderLogin = () => {
    return <Login authHandler={this.authHandler} />
  }

  renderThings = () => {
    const actions = {
      saveThing: this.saveThing,
      removeThing: this.removeThing,
    }
    return (
      <div>
        <button className="logout" onClick={this.logout}>Sign Out</button>
        <button className="add-thing" onClick={this.addThing}>Add Thing</button>
        <ThingList {...this.state} {...actions} />
      </div>
    )
  }

  render() {
    let content
    if (this.state.uid) {
      content = this.renderThings()
    } else {
      content = this.renderLogin()
    }
    return (
      <div className="App">
        <h1>ThingList</h1>
        <h2>So Many Things</h2>
        { content }
      </div>
    );
  }
}

export default App;
