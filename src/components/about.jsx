import React from "react";
import "./estilos/about.css";
import "./estilos/tipografia.css";
import perfil from "../assets/photo.jpg";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>Sobre mí</h2>
          <p className="bio">
            ¡Hola! Soy Cris, ingeniero en sistemas y desarrollador full stack.
            Me especializo en tecnologías modernas y en crear interfaces
            minimalistas, eficientes y fáciles de usar.
          </p>
          <p className="intereses">
            Me apasiona el desarrollo web, la inteligencia artificial y la
            automatización. Disfruto aprender constantemente y encontrar nuevas
            formas de resolver problemas, compartiendo soluciones que realmente
            aporten valor a las personas.
          </p>
          <a href="/CV-Franco.pdf" download className="cv-button">
            Descargar CV
          </a>
        </div>
        <div className="about-photo">
          <img src={perfil} alt="Franco" />
        </div>
      </div>
    </section>
  );
}

export default About;
