import React from 'react'

const Actions = ({ thing, removeThing }) => (
    <span className="actions">
      <button className="remove" onClick={() => removeThing(thing)}>
        <i className="fa fa-trash-o"></i>
      </button>
    </span>
)

const Thing = ({ thing, saveThing, removeThing }) => {
  let name = thing.name

  const toggleChecked = (ev) => {
    thing.completed = ev.target.checked
    saveThing(thing)
  }

  const updateName = (ev) => {
    thing.name = ev.target.textContent
    saveThing(thing)
  }

  const saveOnEnter = (ev) => {
    if (ev.keyCode === 13) {
      ev.preventDefault()
      ev.target.blur()
    }
  }

  return (
    <li className="thing">
      <input type="checkbox" defaultChecked={thing.completed} onChange={toggleChecked} />
      <div className="details">
        <span className="name" contentEditable onBlur={updateName} onKeyDown={saveOnEnter}>{thing.name}</span>
        {' '}
        <Actions thing={thing} removeThing={removeThing}  />
      </div>
    </li>
  )
}

export default Thing