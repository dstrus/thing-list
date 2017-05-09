import React from 'react'

const Thing = ({ thing }) => {
  return (
    <li className="thing">
      <input type="checkbox" defaultChecked={thing.completed} />
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