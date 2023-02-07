import React from 'react'
import "./Precios.css"
import CardPrecios from './CardPrecios'


function Precios() {
  return (
    <>
    <div title='Choose The Right Plan' />
    <section className='price padding'>
      <div className='container grid'>
        <CardPrecios />
      </div>
    </section>
    </>
  )
}

export default Precios