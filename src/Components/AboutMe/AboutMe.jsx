import React from "react";
import "./AboutMe.css";
import Text from "./Text";

function AboutMe() {
  return (
    <div className="AboutBody">
      <div className="AboutContainer">
        <h1 className="StyledHeading">¡Sobre Mí!</h1>

        <div className="TextSection">
          Soy doctora en Ciencias de la Educación. (2006) egresada USM. Mi tesis
          doctoral se titulo Modelo Epistémico Sistémico para integrar la
          investigación a la docencia, en la enseñanza de las Ciencias. Obtuve
          Mención Honorifica por su estructura metodológica y esmerada labor.
          Realice Maestría en Educación: Mención Enseñanza de la Física, UPEL
          1995, mi tesis fue publicada en Physi A Math Gen 29(1996) 1037-1044.
          Profesora de Matemáticas egresada UPEL 1981, me destaque como
          preparadora por 5 semestres de Calculo I y Calculo II.
          <br />
          <br />
          Me he desempeñado como profesora de Matemáticas y Física en diferentes
          instituciones educativas del país., y a mi cargo he tenido varias
          coordinaciones como: Mini-Olimpiadas de Matemáticas, Exposición de
          Física, “Premio al Merito”(para incrementar el rendimiento de los
          estudiantes), Amor a su Institución Educativa. (Restauración de la
          institución educativa y a su vez afianzar los valores de solidaridad,
          cooperación, responsabilidad) le ha tocado diferentes facetas y la
          satisfacción de ver que estos programas, dieron resultado en la
          institución educativa donde se aplico.
          
        </div>
      </div>

      <div className="PhotoContainer"></div>
    </div>
  );
}

export default AboutMe;
