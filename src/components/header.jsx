import React, { useState, useEffect } from "react";
import "./estilos/tipografia.css";
import "./estilos/header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">
          Magno <span className="slogan">| Piensa. Crea. Conecta.</span>
        </h1>

        <div className="hamburger" onClick={() => setIsOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className="nav desktop-nav">
          <a href="#home">Inicio</a>
          <a href="#about">Sobre mí</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contacto</a>
        </nav>

        {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}

        <div className={`mobile-sidebar ${isOpen ? "open" : ""}`}>
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            ×
          </button>
          <a href="#home" onClick={() => setIsOpen(false)}>
            Inicio
          </a>
          <a href="#about" onClick={() => setIsOpen(false)}>
            Sobre mí
          </a>
          <a href="#skills" onClick={() => setIsOpen(false)}>
            Skills
          </a>
          <a href="#projects" onClick={() => setIsOpen(false)}>
            Proyectos
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contacto
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
