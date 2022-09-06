import "./Footer.css"

export function FormUsuario() {
    return <div>
        <form id="FormDatos" method="post">
                <ul>
                    <li>
                        <label for="name">Rut</label>
                        <input type="text" id="name" />
                    </li>
                    <li>
                        <label for="mail">Telefono</label>
                        <input type="email" id="mail" />
                    </li>
                    <li>
                        <label for="msg">Dirrecion</label>
                        <input type="email" id="mail" />
                    </li>
                    <li>
                        <label for="msg">Fecha de nacimiento</label>
                        <input type="email" id="mail" />
                    </li>
                </ul>
            </form>
    </div>
}

