import React from "react";
import { Terminal } from "lucide-react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <nav className="header__nav">
        <div className="header__title">
          <h2>
            Victoria<span> Muñoz Robles</span>
          </h2>
        </div>
        <div className="nav__links">
          <a href="#sobre-mi">Acerca de</a>
          <a href="#proyectos">Trabajos</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
