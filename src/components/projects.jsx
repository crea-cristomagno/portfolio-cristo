import React from "react";
import "./estilos/projects.css";
import "./estilos/tipografia.css";

// Importar imágenes para los fondos de las tarjetas
import arcadia1 from "../assets/projectsimg/arcadia1.jpeg";
import ayac1 from "../assets/projectsimg/ayac1.jpeg";
import eduwallet1 from "../assets/projectsimg/eduwallet1.jpeg";
import stMovil from "../assets/projectsimg/stmovil.jpeg";
import stweb1 from "../assets/projectsimg/stweb1.jpeg";

const projectData = [
  {
    title: "AYAC Quiz",
    description:
      "Plataforma educativa para realizar exámenes en línea entre maestros y estudiantes.",
    link: null,
    image: ayac1,
  },
  {
    title: "SignaTech Web",
    description:
      "Traducción en tiempo real del Lenguaje de Señas Mexicano con guante inteligente.",
    link: "https://joonniboy.github.io/SignaTech/",
    image: stweb1,
  },
  {
    title: "SignaTech Móvil",
    description:
      "App móvil para traducir LSM y seguir progreso de aprendizaje.",
    link: "https://drive.google.com/file/d/1KQ7_LM-upy_HhyLcH7xPpC0Vgub6t-Mo/view",
    image: stMovil,
  },
  {
    title: "Arcadia Explorer",
    description: "Guía turística con IA del municipio de Atlixco.",
    link: null,
    image: arcadia1,
  },
  {
    title: "EduWallet",
    description:
      "App para administrar finanzas escolares con análisis personalizado.",
    link: null,
    image: eduwallet1,
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Proyectos</h2>
      <ul className="projects-list">
        {projectData.map((project, i) => (
          <li
            className="project-card"
            key={i}
            style={{ "--bg-image": `url(${project.image})` }}
          >
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            {project.link && (
              <a
                className="project-button"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Proyecto
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
