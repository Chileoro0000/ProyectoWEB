import "./ofertas.css"
import producto1 from "./3.jpg"

export function Ofertas() {
    return <div>
        <h2 id="TextoOfertas">Ofertas</h2>
        <div className="Plano">
            <div className="contenido">
                <figure>
                    <img className="ImagenProducto" src={producto1} />
                </figure>
                <div>
                    <h3>Nombre Producto</h3>
                    <p>Descripcion</p>
                    <a className="BotonComprar" href="#">Comprar</a>
                </div>

            </div>
            <div className="contenido">
                <figure>
                    <img className="ImagenProducto" src={producto1} />
                </figure>
                <div>
                    <h3>Nombre Producto</h3>
                    <p>Descripcion</p>
                    <a className="BotonComprar" href="#">Comprar</a>
                </div>

            </div>
            <div className="contenido">
                <figure>
                    <img className="ImagenProducto" src={producto1} />
                </figure>
                <div>
                    <h3>Nombre Producto</h3>
                    <p>Descripcion</p>
                    <a className="BotonComprar" href="#">Comprar</a>
                </div>

            </div>
        </div>
    </div>
}