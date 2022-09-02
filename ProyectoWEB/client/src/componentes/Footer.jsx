import { Link } from "react-router-dom"

export function Footer() {
    return <div>
        <footer id="position">
                <section>
                    <Link to="/">Inicio</Link>
                    <a class="correo" href="mailto:henriquez096jn@gmail.com">¿ Estas interesado en trabajar con nosotros? Contactanos aquí</a>
                </section>
                <p>Todos los derechos reservados. Copyright 2022</p>
            </footer>
    </div>
}