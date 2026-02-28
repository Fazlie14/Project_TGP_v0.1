import React from 'react'

function Cards({name, data}) {
  return (
    <div className="stat place-items-center  ">
    <div className="stat-title">{name}</div>
    <div className="stat-value">{data}</div>
  </div>
  )
}

export default Cards