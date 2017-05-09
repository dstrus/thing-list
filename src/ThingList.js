import React from 'react'
import Thing from './Thing'

const ThingList = (props) => {
  const { things } = props
  const sortThings = (a, b) => (
    things[b].id.match(/\d+/)[0] - things[a].id.match(/\d+/)[0]
  )
  return (
    <ul className="things">
      {
        Object.keys(things)
          .sort(sortThings)
          .map(key => <Thing {...props} thing={things[key]} key={key} />)
      }
    </ul>
  )
}

export default ThingList