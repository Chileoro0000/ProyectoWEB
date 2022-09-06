import "./Footer.css"
import "./FormUsuario.css"

export function FormUsuario() {
    return <div>
        <form className="formBody" method="post">
            <div className="formContainer">
                <div className="grupo">
                    <input type="text" id="rut" className="formInput"></input>
                    <label for="rut" className="formLabel">Rut</label>
                </div>
                <div className="grupo">

                    <input type="text" id="telefono" className="formInput"></input>
                    <label for="telefono" className="formLabel">Telefono</label>
                </div>
                <div className="grupo">

                    <input type="text" id="mail" className="formInput"></input>
                    <label for="mail" className="formLabel">Email</label>
                </div>
                <div className="grupo">

                    <input type="text" id="direccion" className="formInput"></input>
                    <label for="direccion" className="formLabel">Direccion</label>
                </div>
                <div className="grupo">
                    <input type="text" id="nacimiento" className="formInput"></input>
                    <label for="nacimiento" className="formLabel">Fecha de nacimiento</label>

                </div>
                <div>
                    <button id="BotonActDatos">
                        <span class="text">Actualizar datos</span>
                        <span>Confirmar!</span>
                    </button>
                </div>
            </div>
        </form>
    </div>
}

