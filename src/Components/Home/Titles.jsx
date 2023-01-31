import React from 'react'

function Titles({ subtitle, title, title2 }) {
  return (
    <>
    <div id='heading'>
      <h3>{subtitle} </h3>
      <h1>{title} </h1>
      <h1>{title2} </h1>
    </div>
  </>
  )
}

export default Titles