import React from 'react'

const Actions = ({ thing, removeThing }) => {
  return (
    <span className="actions">
      <button className="edit">
        <i className="fa fa-pencil"></i>
      </button>
      <button className="remove" onClick={() => removeThing(thing)}>
        <i className="fa fa-trash-o"></i>
      </button>
    </span>
  )
}

const Thing = ({ thing, saveThing, removeThing }) => {
  const toggleChecked = (ev) => {
    thing.completed = ev.target.checked
    saveThing(thing)
  }

  return (
    <li className="thing">
      <input type="checkbox" defaultChecked={thing.completed} onChange={toggleChecked} />
      <div className="details">
        <span className="name">{thing.name}</span>
        {' '}
        <Actions thing={thing} removeThing={removeThing}  />
      </div>
    </li>
  )
}

export default Thing