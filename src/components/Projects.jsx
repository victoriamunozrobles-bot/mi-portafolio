import React from "react";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";

const Projects = () => {
  const portfolioProjects = [
    {
      id: 1,
      title: "API RESTful & Gestión (Placeholder)",
      description:
        "Desarrollo de un sistema integrado aplicando lógica robusta en el servidor y una interfaz dinámica en el cliente. Destaca el manejo eficiente de estados y validaciones seguras.",
      tags: ["React", "Java", "Spring Boot"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 2,
      title: "Componentes UI (Placeholder)",
      description:
        "Librería de componentes modulares y reutilizables diseñados para agilizar el desarrollo frontend, manteniendo una arquitectura limpia y escalable.",
      tags: ["JavaScript", "CSS3", "Vite"],
      githubUrl: "#",
      liveUrl: "#",
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
            marginBottom: "2rem",
          }}
        >
          <FolderGit2 size={32} color="var(--neon-blue)" />
          <h2 style={{ fontSize: "2.5rem" }}>Directorio de Proyectos</h2>
        </div>

        <div className="projects-grid">
          {portfolioProjects.map((project) => (
            <article
              key={project.id}
              className="glass-card"
              style={{ padding: "2rem" }}
            >
              <h3 style={{ fontSize: "1.4rem", marginBottom: "1rem" }}>
                {project.title}
              </h3>
              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.95rem",
                  marginBottom: "1.5rem",
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
                      color: "var(--neon-blue)",
                      background: "rgba(0, 245, 212, 0.1)",
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
                  gap: "1rem",
                  borderTop: "1px solid var(--border-glass)",
                  paddingTop: "1rem",
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
                    fontSize: "0.9rem",
                    color: "var(--text-main)",
                  }}
                >
                  <Github size={18} /> Código Base
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.9rem",
                    color: "var(--text-main)",
                  }}
                >
                  <ExternalLink size={18} /> Ejecutar Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
