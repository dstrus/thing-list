import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ContentEditable from 'react-contenteditable'

const Actions = ({ thing, removeThing }) => (
    <span className="actions">
      <button className="remove" onClick={() => removeThing(thing)}>
        <i className="fa fa-trash-o"></i>
      </button>
    </span>
)

class Thing extends Component {
  componentDidMount() {
    const input = ReactDOM.findDOMNode(this.nameInput)
    if (input.textContent === '') {
      input.focus()
    }
  }

  toggleChecked = (ev) => {
    this.props.thing.completed = ev.target.checked
    this.props.saveThing(this.props.thing)
  }

  updateName = (ev) => {
    const thing = {...this.props.thing}
    thing.name = ev.target.value
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
          <ContentEditable
            className="name"
            onChange={this.updateName}
            onKeyDown={this.saveOnEnter}
            html={thing.name}
            ref={input => this.nameInput = input}
          />
          {' '}
          <Actions thing={thing} removeThing={this.props.removeThing}  />
        </div>
      </li>
    )
  }
}

export default Thing