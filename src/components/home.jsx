import React from "react";
import "./estilos/tipografia.css";
import "./estilos/home.css";
import perfil from "../assets/photo.jpg";

function Home() {
  return (
    <section id="home">
      <div className="home-container">
        <img src={perfil} alt="foto ilustrativa" className="profile-photo" />
        <h1 className="titulo">Cristian Franco</h1>
        <h2 className="subtitulo">
          Ingeniero en Sistemas Computacionales y Técnico en Programación
        </h2>
        <h2 className="frase">
          El crecimiento personal no se trata de encontrar siempre respuestas
          felices, sino de aprender a vivir con las duras verdades que
          preferimos evitar.
        </h2>
      </div>
    </section>
  );
}

export default Home;
