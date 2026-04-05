import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import { Mail, MapPin, Send } from "lucide-react";

function App() {
  return (
    <>
      {/* Efectos de luz digitales de fondo */}
      <div className="glow-blob glow-1"></div>
      <div className="glow-blob glow-2"></div>
      <div className="glow-blob glow-3"></div>

      <Header />
      <main>
        <Hero />
        <About />
        <Projects />

        <section
          id="contacto"
          style={{ textAlign: "center", paddingBottom: "4rem" }}
        >
          <div
            className="container glass-card"
            style={{ maxWidth: "800px", margin: "0 auto" }}
          >
            <Send
              size={40}
              color="var(--neon-purple)"
              style={{ marginBottom: "1rem" }}
            />
            <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
              Inicializando Conexión...
            </h2>
            <p
              style={{
                color: "var(--text-muted)",
                marginBottom: "2.5rem",
                fontSize: "1.1rem",
              }}
            >
              Mi bandeja de entrada está abierta. Ya sea para una oportunidad
              laboral como Trainee/Junior o simplemente para hablar de código.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "3rem",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.8rem",
                  fontSize: "1.1rem",
                }}
              >
                <MapPin size={24} color="var(--neon-blue)" /> Temuco, Chile
                (Remoto)
              </div>
              <a
                href="mailto:correo@ejemplo.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.8rem",
                  fontSize: "1.1rem",
                  color: "var(--text-main)",
                }}
              >
                <Mail size={24} color="var(--neon-pink)" /> correo@ejemplo.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer
        style={{
          textAlign: "center",
          padding: "2rem 0",
          borderTop: "1px solid var(--border-glass)",
        }}
      >
        <div className="container">
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
            © 2026 Victoria Muñoz. Escrito con React y{" "}
            <span style={{ color: "var(--neon-pink)" }}>♥</span>.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
