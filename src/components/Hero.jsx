export default function Hero({ perfil }) {
    return (
        <section id="inicio" className="hero">
            <div className="hero-main">
                <img
                    className="hero-img"
                    src={perfil.foto}
                    alt={perfil.nombre}
                />

                <div className="hero-text">
                    <p className="hero-tag">Portafolio personal</p>
                    <h2>{perfil.nombre}</h2>
                    <h3>{perfil.rol}</h3>
                    <p>{perfil.descripcion}</p>

                    <p className="hero-visitas">
                        Visitas simuladas: <strong>{perfil.visitas}</strong>
                    </p>

                    <div className="hero-actions">
                        <a href="#proyectos" className="btn primary">
                            Ver proyectos
                        </a>
                        <a href="#contacto" className="btn secondary">
                            Contactar
                        </a>
                    </div>
                </div>
            </div>

            <div className="hero-card">
                <div className="hero-info-row">📍 Palma de Mallorca</div>
                <div className="hero-info-row">✉️ {perfil.contacto.email}</div>
                <div className="hero-info-row">👨‍🎓 Estudiante de 2º DAW</div>

                <div className="hero-card-divider"></div>

                <div className="hero-links">
                    <a href={perfil.links.github} target="_blank">🐙 GitHub</a>
                    <a href={perfil.links.linkedin} target="_blank">💼 LinkedIn</a>
                </div>
            </div>
        </section>
    );
}
