import React from 'react'
import "./Clases.css"
import Back from './Back'
import CardClase from './CardClase'

function Clases() {
  return (
    <>
      <div title='Blog Posts' />
      <section className='blog padding'>
        <div className='container grid2'>
          <CardClase />
        </div>
      </section>
    </>
  )
}

export default Clases