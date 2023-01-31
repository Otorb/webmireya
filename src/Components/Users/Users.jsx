import React from 'react'
import { app } from "../../fb";
import Clases from '../Clases/Clases';

function Users() {

    const cerrarSesion = () => {
        app.auth().signOut();
      };
      console.log(app,"app")
  return (
    <div>
      <h1>Bienvenido.</h1>
      <button onClick={cerrarSesion}>Cerrar Sesión</button>

      <Clases />
    </div>
  )
}

export default Users