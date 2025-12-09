export default function Contacto() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Mensaje enviado ✅");
    };

    return (
        <section id="contacto" className="section">
            <h2>Contacto</h2>

            <form className="form" onSubmit={handleSubmit}>
                <label>
                    Nombre
                    <input type="text" required />
                </label>

                <label>
                    Email
                    <input type="email" placeholder="tuemail@ejemplo.com" required />
                </label>

                <label>
                    Mensaje
                    <textarea rows="4" required />
                </label>

                <button className="btn primary">Enviar</button>
            </form>
        </section>
    );
}
