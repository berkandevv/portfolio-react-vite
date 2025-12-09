import ProyectoCard from "./ProjectCard";

export default function Proyectos({ proyectos }) {
    return (
        <section id="proyectos" className="section">
            <div className="section-header">
                <h2>Proyectos realizados</h2>
            </div>

            <div className="grid">
                {proyectos.map((proyecto) => (
                    <ProyectoCard key={proyecto.id} proyecto={proyecto} />
                ))}
            </div>
        </section>
    );
}
