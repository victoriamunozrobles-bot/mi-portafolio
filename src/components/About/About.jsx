import React from "react";
import { Database, Layout, Server, Cpu } from "lucide-react";
import "./About.css";

const About = () => {
  return (
    <section id="sobre-mi">
      <div className="about">
        <div className="about__container">
          <h2 className="about__title">Sobre mí</h2>
          <p className="about__description">
            Mi transición hacia la tecnología ha sido un proceso de evolución
            lógica. Vengo del área de la educación y el lenguaje, lo que me
            otorgó una aguda atención al detalle y capacidad para estructurar
            ideas complejas. Hoy en día, aplico esa misma rigurosidad
            estructurando código y arquitecturas de software.
            <br /> Me considero una estudiante en todo sentido. Actualmente, mi
            stack principal gira en torno al ecosistema de JavaScript con
            Node.js en el backend y React en el frontend, y estoy altamente
            motivada por dominar nuevas herramientas y metodologías ágiles en
            entornos profesionales dinámicos.
          </p>

          <div className="about__grid">
            <div className="about__grid-tag">
              <Server size={16} color="var(--c-purple)" /> Java & Spring Boot
            </div>
            <div className="about__grid-tag">
              <Layout size={16} color="var(--c-pink)" /> React & JavaScript
            </div>
            <div className="about__grid-tag">
              <Database size={16} color="var(--c-orange)" /> SQL & Bases de
              Datos
            </div>
            <div className="about__grid-tag">
              <Cpu size={16} color="var(--c-yellow)" /> Estructuras de Datos
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
