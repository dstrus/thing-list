import React from 'react'
import Thing from './Thing'

const ThingList = (props) => {
  const { things } = props
  return (
    <ul className="things">
      { Object.keys(things).map(key => <Thing {...props} thing={things[key]} key={key} />) }
    </ul>
  )
}

export default ThingList