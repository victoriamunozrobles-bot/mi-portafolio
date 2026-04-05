import React from "react";
import { ExternalLink, Code, FolderGit2 } from "lucide-react";
import Biblioteca from "../assets/biblioteca.png";

const Projects = () => {
  const portfolioProjects = [
    {
      id: 1,
      title: "Biblioteca Digital UNTEC",
      description:
        "Plataforma web Full Stack para la gestión integral de una biblioteca. Desarrollada bajo el patrón MVC, incluye autenticación con control de roles (Admin/Estudiante), gestión de inventario, sistema de préstamos y devoluciones, y un panel de métricas en tiempo real.",
      tags: ["Java", "JSP & Servlets", "MariaDB", "MVC", "Bootstrap 5"],
      githubUrl:
        "https://github.com/victoriamunozrobles-bot/biblioteca_digital_untec.git", // Reemplaza con tu link de GitHub
      liveUrl: "https://youtu.be/tHSpYRH390g",
      image: Biblioteca,
    },
    {
      id: 2,
      title: "Próximo Proyecto...",
      description:
        "Espacio reservado para mi siguiente desafío técnico. Actualmente estoy construyendo nuevas soluciones para seguir expandiendo mi stack tecnológico y aplicar buenas prácticas de desarrollo.",
      tags: ["En desarrollo", "Próximamente"],
      githubUrl: "#",
      liveUrl: "#",
      // image: null
    },
  ];

  return (
    <section id="proyectos">
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "3rem",
          }}
        >
          <FolderGit2 size={32} color="var(--c-peach)" />
          <h2 style={{ fontSize: "2.5rem" }}>Directorio de Proyectos</h2>
        </div>

        <div className="projects-grid">
          {portfolioProjects.map((project) => (
            <article
              key={project.id}
              className="glass-card"
              style={{
                padding: "0",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Sección de la Imagen del Proyecto */}
              <div
                style={{
                  width: "100%",
                  height: "200px",
                  background: project.image
                    ? `url(${project.image}) center/cover`
                    : "linear-gradient(135deg, rgba(167, 144, 234, 0.2), rgba(249, 163, 226, 0.1))",
                  borderBottom: "1px solid var(--border-glass)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {!project.image && (
                  <span
                    style={{
                      color: "var(--c-purple)",
                      opacity: 0.5,
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    [ Espacio para Imagen ]
                  </span>
                )}
              </div>

              {/* Contenido de la Tarjeta */}
              <div
                style={{
                  padding: "2rem",
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3 style={{ fontSize: "1.4rem", marginBottom: "1rem" }}>
                  {project.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.95rem",
                    marginBottom: "1.5rem",
                    flexGrow: 1,
                  }}
                >
                  {project.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    marginBottom: "2rem",
                  }}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "0.8rem",
                        color: "#111",
                        fontWeight: "600",
                        background: "var(--c-yellow)",
                        padding: "0.2rem 0.6rem",
                        borderRadius: "4px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "1.5rem",
                    borderTop: "1px solid var(--border-glass)",
                    paddingTop: "1.5rem",
                  }}
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontSize: "0.95rem",
                      color: "var(--text-main)",
                    }}
                  >
                    <Code size={18} color="var(--c-mint)" /> Repositorio
                  </a>
                  {project.id === 1 && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        fontSize: "0.95rem",
                        color: "var(--text-main)",
                      }}
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
