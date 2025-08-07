import React from "react";
import "./estilos/tipografia.css";
import "./estilos/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © 2025 Magno. Todos los derechos reservados.
        </p>
        {/* Si quieres agregar links a redes: descomenta los de abajo */}
        {/* 
        <div className="footer-links">
          <a href="https://github.com/tuusuario" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:correo@ejemplo.com">Correo</a>
        </div>
        */}
      </div>
    </footer>
  );
}

export default Footer;
