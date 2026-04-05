import React from "react";
import { ChevronRight, Code2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero-content">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            color: "var(--c-purple)",
            marginBottom: "1rem",
            fontFamily: "var(--font-heading)",
          }}
        >
          <Code2 size={20} />
          <span>Full Stack Developer Trainee</span>
        </div>
        <h1>
          Construyendo
          <br />
          el futuro, línea a línea.
        </h1>
        <p>
          Soy Victoria, una apasionada por el desarrollo de software.
          Transfiriendo mis habilidades analíticas y de comunicación al mundo
          del código, enfocada en crear soluciones limpias, eficientes y
          escalables.
        </p>
        <div style={{ display: "flex", gap: "1rem" }}>
          <a href="#proyectos" className="btn">
            Ver proyectos <ChevronRight size={18} />
          </a>
          <a href="#contacto" className="btn btn-outline">
            Contactar
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
