import React, { useEffect } from "react";
import { app } from "../../fb";
import Users from "./Users";
import Logueo from "./Login";

function Clases() {
    const [user, setUsuario] = React.useState(null);
    useEffect(() => {
      app.auth().onAuthStateChanged((usuarioFirebase) => {
        console.log("ya tienes sesión iniciada con:", usuarioFirebase);
        setUsuario(usuarioFirebase);
      });
    }, []);
  
    return <>{user ? <Users /> : <Logueo setUsuario={setUsuario} />}</>;
  }
export default Clases