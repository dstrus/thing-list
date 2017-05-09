import React from 'react'

const Actions = ({ thing }) => {
  return (
    <span className="actions">
      <button className="edit">
        <i className="fa fa-pencil"></i>
      </button>
      <button className="remove">
        <i className="fa fa-trash-o"></i>
      </button>
    </span>
  )
}

const Thing = ({ thing, saveThing }) => {
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
        <Actions />
      </div>
    </li>
  )
}

export default Thing