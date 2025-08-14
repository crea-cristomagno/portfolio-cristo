import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import "./estilos/contact.css";
import "./estilos/tipografia.css";

export const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    emailjs
      .sendForm("service_k6038vs", "template_44swdzq", form.current, {
        publicKey: "drxX7_O_-E1EE2YfX",
      })
      .then(
        () => {
          setStatus("¡Mensaje enviado con éxito!");
          form.current.reset();
        },
        (error) => {
          console.error("Error al enviar:", error.text);
          setStatus("Ocurrió un error. Intenta de nuevo.");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contacto</h2>
      <p>¿Tienes una consulta o idea? ¡Estoy aquí para ayudarte!</p>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="user_name"
          placeholder="Tu nombre"
          required
        />

        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          name="user_email"
          placeholder="tucorreo@email.com"
          required
        />

        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          name="message"
          placeholder="Escribe tu mensaje..."
          required
        />

        <button type="submit">Enviar mensaje</button>

        {status && <p className="form-status">{status}</p>}
      </form>

      {/* Sección de redes sociales */}
      <div className="social-links">
        <h3>Conecta conmigo</h3>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/cristian-franco-lazaro-0a273a35a"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/CristoMagno"
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com/cristianprime00"
            title="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61577081548675&viewas=100000686899395"
            title="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com/@Cristo_Magno"
            title="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
