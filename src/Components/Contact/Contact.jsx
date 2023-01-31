import React from "react";
import "./Contact.css";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

function Contact() {
  const navigate = useNavigate();
  //mail aqui
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d4n8uu8",
        "template_b91p3lr",
        e.target,
        "m161GBw_7jaymvDc3",
        alert("Su mensaje ha sido enviado, pronto te responderemos")
      )
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
    navigate("/");
  }

  return (
    <div className="wrapper">
      <form className="form">
        <div className="pageTitle title">Contacto </div>
        <div className="secondaryTitle title">
          Envía tu comentario o sugerencia.
        </div>
        <input type="text" className="name formEntry" placeholder="Nombre" />
        <input type="text" className="email formEntry" placeholder="Correo" />
        <textarea className="message formEntry" placeholder="Mensaje"></textarea>
        <button className="submit formEntry" onclick="thanks()">
          Enviar
        </button> 
      </form>
    </div>
  );
}
export default Contact;

