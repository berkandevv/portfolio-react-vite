export default function Header({ temaOscuro, cambiarTema }) {
    return (
        <header className="nav">
            <h1 className="logo"> Portafolio </h1>

            <nav>
                <a href="#inicio">Inicio</a>
                <a href="#proyectos">Proyectos</a>
                <a href="#contacto">Contacto</a>
                <a href="#newsletter">Newsletter</a>
            </nav>

            <button className="btn" onClick={cambiarTema}>
                {temaOscuro ? "Modo claro" : "Modo oscuro"}
            </button>
        </header>
    );
}
