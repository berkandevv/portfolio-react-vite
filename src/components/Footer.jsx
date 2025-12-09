export default function Footer({ perfil }) {
    return (
        <footer className="footer">
            <p>
                © {new Date().getFullYear()} Portafolio de {perfil.nombre} - Todos los derechos reservados
            </p>
        </footer>
    );
}
