import React from "react";
import { Database, Layout, Server, Cpu } from "lucide-react";

const About = () => {
  return (
    <section id="sobre-mi">
      <div className="container">
        <div className="glass-card">
          <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>
            System.out.println("Sobre mí");
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-muted)",
              marginBottom: "1.5rem",
            }}
          >
            Mi transición hacia la tecnología ha sido un proceso de evolución
            lógica. Vengo del área de la educación y el lenguaje, lo que me
            otorgó una aguda atención al detalle y capacidad para estructurar
            ideas complejas. Hoy en día, aplico esa misma rigurosidad
            estructurando código y arquitecturas de software.
          </p>
          <p style={{ fontSize: "1.1rem", color: "var(--text-muted)" }}>
            Me considero una eterna estudiante. Actualmente, mi stack principal
            gira en torno al ecosistema de Java en el backend y React en el
            frontend, y estoy altamente motivada por dominar nuevas herramientas
            y metodologías ágiles en entornos profesionales dinámicos.
          </p>

          <div className="tech-grid">
            <div className="tech-tag">
              <Server size={16} color="var(--neon-purple)" /> Java & Spring Boot
            </div>
            <div className="tech-tag">
              <Layout size={16} color="var(--neon-blue)" /> React & JavaScript
            </div>
            <div className="tech-tag">
              <Database size={16} color="var(--neon-pink)" /> SQL & Bases de
              Datos
            </div>
            <div className="tech-tag">
              <Cpu size={16} color="#F59E0B" /> Estructuras de Datos
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
