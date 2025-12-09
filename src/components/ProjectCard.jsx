export default function ProyectoCard({ proyecto }) {
    const { titulo, descripcion, tecnologias, imagen } = proyecto;

    return (
        <article className="card">
            <div className="card-img-wrapper">
                <img
                    src={imagen}
                    alt={titulo}
                    className="card-img"
                />
            </div>

            <h3>{titulo}</h3>
            <p>{descripcion}</p>
            <p><strong>Tecnologías:</strong> {tecnologias.join(", ")}</p>
        </article>
    );
}
