import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import "./Header.css";

function Header() {
  const [click, setClick] = useState(false);

  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB "}
            onClick={() => setClick(false)}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/precios" style={{ color: "black" }}>
                Precios
              </Link>
            </li>
            <li>
              <Link to="/about" style={{ color: "black" }}>
                Sobre mí
              </Link>
            </li>
            {/* <li>
            <Link to='/team'>Team</Link>
          </li>
          <li>
            <Link to='/pricing'>Pricing</Link>
          </li>
          <li>
            <Link to='/journal'>Journal</Link>
          </li> */}
            <li>
              <Link to="/contact" style={{ color: "black" }}>
                Contacto
              </Link>
            </li>
          </ul>
          <div className="start">
            <div className="button"><Link to='/clases' style={{cursor: "pointer"}}>Ingresa a las clases Grabadas </Link></div>
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? (
              <i className="fa fa-times"> </i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </nav>
      </header>
    </>
  );
}

export default Header;
