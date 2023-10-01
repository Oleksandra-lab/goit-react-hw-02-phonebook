
import React from 'react'

export default function Filter({onFilter}) {
  return (
    <input type="text" name ="filter" onChange={evt => onFilter(evt.target.value)}/>
  )
}
