import React from "react";
import "./estilos/tipografia.css";
import {
  FaJs,
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaAndroid,
  FaSwift,
  FaPhp,
  FaCode,
  FaMicrosoft,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaLanguage,
  FaGraduationCap,
  FaStar,
} from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";

import "./estilos/skills.css";
import "./estilos/tipografia.css";

function CircularProgress({ level, color, children }) {
  const radius = 40;
  const stroke = 8;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (level / 100) * circumference;

  return (
    <div className="circular-wrapper">
      <svg height={radius * 2} width={radius * 2} className="circular-progress">
        <circle
          stroke="#e6e6e6"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <div className="circular-icon">{children}</div>
    </div>
  );
}

function Skills() {
  const skills = [
    { name: "React", icon: <FaReact />, level: 50, color: "#61DBFB" },
    { name: "Node.js", icon: <FaNodeJs />, level: 75, color: "#68A063" },
    { name: "JavaScript", icon: <FaJs />, level: 85, color: "#f7df1e" },
    { name: "Java", icon: <FaJava />, level: 80, color: "#f89820" },
    { name: "Python", icon: <FaPython />, level: 90, color: "#3776ab" },
    { name: "HTML", icon: <FaHtml5 />, level: 100, color: "#e34f26" },
    { name: "CSS", icon: <FaCss3Alt />, level: 90, color: "#264de4" },
    { name: "Kotlin", icon: <FaAndroid />, level: 75, color: "#a97bff" },
    { name: "Swift", icon: <FaSwift />, level: 75, color: "#fa7343" },
    { name: "C", icon: <FaCode />, level: 80, color: "#00599c" },
    { name: "C#", icon: <FaMicrosoft />, level: 90, color: "#68217a" },
    { name: "C++", icon: <SiCplusplus />, level: 75, color: "#00599c" },
    { name: "PHP", icon: <FaPhp />, level: 100, color: "#777bb3" },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="title">Skills & Experiencia</h2>
        <h3 className="subtitle">Lenguajes de Programación</h3>
        <div className="skills-grid-circular">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="skill-card"
              title={`${skill.name} - Nivel: ${skill.level}%`}
            >
              <CircularProgress level={skill.level} color={skill.color}>
                <span style={{ color: skill.color, fontSize: "2rem" }}>
                  {skill.icon}
                </span>
              </CircularProgress>
              <div className="skill-name">{skill.name}</div>
              <div
                className="skill-percentage-label"
                style={{ color: skill.color }}
              >
                {skill.level}%
              </div>
            </div>
          ))}
        </div>

        <div className="info-sections">
          <section className="info-block bg-database">
            <div className="info-icon-wrapper">
              <FaDatabase className="info-icon" />
            </div>
            <h3 className="info-title">Bases de Datos</h3>
            <div className="info-text">
              <p>
                <strong>Relacionales:</strong> MySQL, PostgreSQL, MariaDB
              </p>
              <p>
                <strong>No relacionales:</strong> MongoDB, Firebase
              </p>
            </div>
          </section>

          <section className="info-block bg-language">
            <div className="info-icon-wrapper">
              <FaLanguage className="info-icon" />
            </div>
            <h3 className="info-title">Idiomas</h3>
            <div className="info-text">
              <p>Inglés - Nivel B1</p>
            </div>
          </section>

          <section className="info-block bg-education">
            <div className="info-icon-wrapper">
              <FaGraduationCap className="info-icon" />
            </div>
            <h3 className="info-title">Formación Técnica</h3>
            <div className="info-text">
              <p>Título como Técnico en Programación.</p>
              <p>Desarrollo de software con programación estructurada.</p>
              <p>Metodologías de desarrollo con programación visual.</p>
              <p>Desarrollo de aplicaciones web y móviles.</p>
              <p>Aplicaciones web con almacenamiento persistente.</p>
            </div>
          </section>

          <section className="info-block bg-experience">
            <div className="info-icon-wrapper">
              <FaStar className="info-icon" />
            </div>
            <h3 className="info-title">Experiencia Destacada</h3>
            <div className="info-text">
              <p>Curso de Seguridad Cibernética (CISCO).</p>
              <p>Participación en Hackatón - Cuartos de final.</p>
              <p>
                Finalista a nivel Nacional en Innovación Tecnológica - InnovaTec
                2024.
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Skills;
