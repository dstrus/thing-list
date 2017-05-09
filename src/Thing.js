import React from 'react'

const Thing = ({ thing, saveThing }) => {
  const toggleChecked = (ev) => {
    thing.completed = ev.target.checked
    saveThing(thing)
  }

  return (
    <li className="thing">
      <input type="checkbox" defaultChecked={thing.completed} onChange={toggleChecked} />
      <p>{thing.name}</p>
    </li>
  )
}

export default Thing