import React from "react";
import { ExternalLink, Code, FolderGit2 } from "lucide-react";
import "./Projects.css";
import Biblioteca from "../../assets/biblioteca.png";
import bookTracker from "../../assets/book-tracker-cover.png";

const Projects = () => {
  const portfolioProjects = [
    {
      id: 1,
      title: "Biblioteca Digital UNTEC",
      description:
        "Plataforma web Full Stack para la gestión integral de una biblioteca. Desarrollada bajo el patrón MVC, incluye autenticación con control de roles (Admin/Estudiante), gestión de inventario, sistema de préstamos y devoluciones, y un panel de métricas en tiempo real.",
      tags: ["Java", "JSP & Servlets", "MariaDB", "MVC", "Bootstrap 5"],
      githubUrl:
        "https://github.com/victoriamunozrobles-bot/biblioteca_digital_untec.git",
      liveUrl: "https://youtu.be/tHSpYRH390g",
      image: Biblioteca,
    },
    {
      id: 3,
      title: "Book-Tracker: registra tus lecturas",
      description:
        "App web full stack creada con React y Node para el registro de lecturas personales. Utiliza la API de Google Books para devolver libros en base a la búsqueda del usuario y permite agregar a biblioteca, registrar fecha de inicio y fin de la lectura, y escribir notas.",
      tags: ["JavaScript", "React", "Node", "MongoDB", "Express"],
      githubUrl: [
        "https://github.com/victoriamunozrobles-bot/book-tracker-frontend.git",
      ],
      liveUrl: "https://book-tracker.mooo.com",
      image: bookTracker,
    },
    {
      id: 2,
      title: "Próximo Proyecto...",
      description:
        "Espacio reservado para mi siguiente desafío técnico. Actualmente estoy construyendo nuevas soluciones para seguir expandiendo mi stack tecnológico y aplicar buenas prácticas de desarrollo.",
      tags: ["En desarrollo", "Próximamente"],
      githubUrl: "#",
      liveUrl: "#",
    },
  ];

  return (
    <section id="proyectos">
      <div className="projects">
        <div className="projects__title">
          <FolderGit2 size={32} color="var(--c-peach)" />
          <h2>Directorio de Proyectos</h2>
        </div>

        <div className="projects__grid">
          {portfolioProjects.map((project) => (
            <article key={project.id} className="projects__card">
              <div
                className="projects__image-container"
                style={{
                  background: project.image
                    ? `url(${project.image}) center/cover`
                    : "linear-gradient(135deg, rgba(167, 144, 234, 0.2), rgba(249, 163, 226, 0.1))",
                }}
              >
                {!project.image && (
                  <span className="projects__image-placeholder">
                    [ Espacio para Imagen ]
                  </span>
                )}
              </div>

              <div className="projects__content">
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-description">
                  {project.description}
                </p>

                <div className="projects__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="projects__tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="projects__links">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="projects__link"
                  >
                    <Code size={18} color="var(--c-mint)" /> Repositorio
                  </a>
                  {project.id === 1 && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="projects__link"
                    >
                      <ExternalLink size={18} color="var(--c-pink)" /> Ver Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
