import React, { Component } from 'react'

const Actions = ({ thing, removeThing }) => (
    <span className="actions">
      <button className="remove" onClick={() => removeThing(thing)}>
        <i className="fa fa-trash-o"></i>
      </button>
    </span>
)

class Thing extends Component {
  componentDidMount() {
    if (this.nameInput.textContent === '') {
      this.nameInput.focus()
    }
  }

  toggleChecked = (ev) => {
    this.props.thing.completed = ev.target.checked
    this.props.saveThing(this.props.thing)
  }

  updateName = (ev) => {
    const thing = {...this.props.thing}
    thing.name = ev.target.textContent
    this.props.saveThing(thing)
  }

  saveOnEnter = (ev) => {
    if (ev.keyCode === 13) {
      ev.preventDefault()
      ev.target.blur()
    }
  }

  render() {
    const thing = this.props.thing
    return (
      <li className="thing">
        <input type="checkbox" defaultChecked={thing.completed} onChange={this.toggleChecked} />
        <div className="details">
          <span
            className="name"
            contentEditable
            onBlur={this.updateName}
            onKeyDown={this.saveOnEnter}
            ref={(input) => this.nameInput = input}
          >
            {thing.name}
          </span>
          {' '}
          <Actions thing={thing} removeThing={this.props.removeThing}  />
        </div>
      </li>
    )
  }
}

export default Thing