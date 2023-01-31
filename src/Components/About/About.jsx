import React from 'react'
import { homeAbout } from "../../info"
import Titles from '../Home/Titles'
import "./About.css"

function About() {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src='./images/mireya.png' alt='' />
          </div>
          <div className='right row'>
            <Titles subtitle='APRENDE EN GRANDE' title='Beneficios de nuestras clases' />
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default About