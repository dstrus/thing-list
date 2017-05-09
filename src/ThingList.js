import React from 'react'

const Thing = ({ thing, saveThing }) => {
  const toggleChecked = (ev) => {
    const updatedThing = {...thing}
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

const ThingList = (props) => {
  const { things } = props
  return (
    <ul className="things">
      { Object.keys(things).map(key => <Thing {...props} thing={things[key]} key={key} />) }
    </ul>
  )
}

export default ThingList