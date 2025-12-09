export default function Newsletter({ newsletter }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Suscripción realizada ✅");
    };

    if (!newsletter) return null;

    const contenido = newsletter.contenido || {};

    return (
        <section id="newsletter" className="section section--alt">

            <h2>{newsletter.titulo}</h2>
            <p>{newsletter.descripcion}</p>
            <p>Frecuencia: {newsletter.frecuencia}</p>

            <form className="form-inline" onSubmit={handleSubmit}>
                <input type="email" placeholder="tuemail@ejemplo.com" required />
                <button className="btn primary">Suscribirme</button>
            </form>

            <p className="newsletter-example badge-example">
                Este es un ejemplo de los correos que recibirás cada mes.
            </p>

            {contenido.imagen && (
                <img
                    src={contenido.imagen}
                    alt="Newsletter header"
                    className="newsletter-header-img"
                />
            )}

            {contenido.intro && contenido.intro.map((p, index) => (
                <p key={index}>{p}</p>
            ))}

            {contenido.proyectoDestacado && (
                <div className="newsletter-block">
                    <h3>{contenido.proyectoDestacado.titulo}</h3>

                    {contenido.proyectoDestacado.imagen && (
                        <img
                            src={contenido.proyectoDestacado.imagen}
                            alt={contenido.proyectoDestacado.nombre}
                            className="newsletter-img"
                        />
                    )}

                    <strong>{contenido.proyectoDestacado.nombre}</strong>
                    <p>{contenido.proyectoDestacado.descripcion}</p>

                    <ul>
                        {contenido.proyectoDestacado.items.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}

            {contenido.aprendiendo && (
                <div className="newsletter-block">
                    <h3>{contenido.aprendiendo.titulo}</h3>

                    {contenido.aprendiendo.imagen && (
                        <img
                            src={contenido.aprendiendo.imagen}
                            alt="Aprendiendo este mes"
                            className="newsletter-img"   // o "newsletter-photo" si unificaste
                        />
                    )}

                    <ul>
                        {contenido.aprendiendo.items.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}

            {contenido.tip && (
                <div className="newsletter-block">
                    <h3>{contenido.tip.titulo}</h3>

                    {contenido.tip.imagen && (
                        <img
                            src={contenido.tip.imagen}
                            alt="Tip del mes"
                            className="newsletter-img"
                        />
                    )}

                    <p>{contenido.tip.texto}</p>
                </div>
            )}
        </section>
    );
}
