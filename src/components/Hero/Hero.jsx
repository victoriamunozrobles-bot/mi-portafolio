import React from "react";
import { ChevronRight, Code2 } from "lucide-react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <div hero__content-rol>
          <span>Full Stack Developer Trainee</span>
        </div>
        <div className="hero__content-title">
          <h1>
            Desarrollo web
            <br />
            con un pasado en pedagogía
          </h1>
        </div>

        <p>
          Soy Victoria, una apasionada por el desarrollo de software. Transfiero
          mis habilidades analíticas, evaluativas y de comunicación al mundo del
          código, con un enfoque en crear soluciones limpias, eficientes y
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
