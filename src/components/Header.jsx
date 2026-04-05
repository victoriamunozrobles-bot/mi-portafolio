import React from "react";
import { Terminal } from "lucide-react";

const Header = () => {
  return (
    <div className="container">
      <nav>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Terminal color="var(--neon-blue)" size={28} />
          <h2 style={{ fontSize: "1.5rem", margin: 0 }}>
            Victoria<span style={{ color: "var(--neon-pink)" }}> Muñoz</span>
          </h2>
        </div>
        <div className="nav-links">
          <a href="#sobre-mi">// About</a>
          <a href="#proyectos">// Work</a>
          <a href="#contacto">// Contact</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
