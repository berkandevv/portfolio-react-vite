import { useState, useEffect } from "react";
import { useImmer } from "use-immer";
import "./App.css";

// Componentes
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Proyectos from "./components/Projects";
import Contacto from "./components/Contact";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function App() {
  const [temaOscuro, setTemaOscuro] = useState(false);
  const [perfil, actualizarPerfil] = useImmer(null);
  const [proyectos, setProyectos] = useState([]);
  const [newsletter, setNewsletter] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  // Cargar JSON
  useEffect(() => {
    fetch("/data/data.json")
      .then((r) => {
        if (!r.ok) throw new Error("Error al cargar data.json");
        return r.json();
      })
      .then((data) => {
        actualizarPerfil(data.perfil);
        setProyectos(data.proyectos);
        setNewsletter(data.newsletter);
        setCargando(false);
      })
      .catch(() => {
        setError("No se pudieron cargar los datos");
        setCargando(false);
      });
  }, []);

  // Cambiar título del documento
  useEffect(() => {
    if (perfil?.nombre) {
      document.title = `${perfil.nombre} | Portafolio`;
    }
  }, [perfil?.nombre]);

  // Simular visitas
  useEffect(() => {
    if (!perfil) return;
    actualizarPerfil((draft) => {
      draft.visitas = (draft.visitas ?? 0) + 1;
    });
  }, [perfil?.nombre, actualizarPerfil]);

  const cambiarTema = () => setTemaOscuro((prev) => !prev);

  if (cargando) return <p style={{ padding: "2rem" }}>Cargando datos...</p>;
  if (error) return <p style={{ padding: "2rem", color: "red" }}>{error}</p>;
  if (!perfil) return <p>No se pudo cargar el perfil!</p>;

  return (
    <div className={temaOscuro ? "app app--dark" : "app"}>
      <Header temaOscuro={temaOscuro} cambiarTema={cambiarTema} />
      <Hero perfil={perfil} />
      <Skills />
      <Proyectos proyectos={proyectos} />
      <Contacto />
      <Newsletter newsletter={newsletter} />
      <Footer perfil={perfil} />
    </div>
  );
}
