import React from 'react'
import "./Home.css"
import Titles from './Titles'
import About from '../About/About'

function Home() {
  return (
    <>
    <section className="hero">
      <div className="container">
        <div className="row">
          <Titles 
          /* subtitle="PROFESORA" */
           title="Matemática" 
           title2="Física"
           />
          <p>
            Profesora de Matemáticas y Magister en Educación: Mención:
            Enseñanza de la física y Doctora en Educación.
          </p>
          <p>
            Con mas de 20 años de experiencia en educación secundaria y
            universitaria, dando clases en el Instituto Pedagógico de
            Caracas(IPC) y en la Universidad Central de Venezuela (UCV).
          </p>
          <div className="button">
            <button className="primary-btn">
              CONTACTO <i className="fa fa-long-arrow-alt-right"></i>
            </button>
            <button>
              VER CLASES <i className="fa fa-long-arrow-alt-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
    <div className="margin"></div>
    <br/><br/><br/><br/><br/>
    <About />
  </>
  )
}

export default Home