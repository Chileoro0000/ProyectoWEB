import "./MenuCaja.css"

export function MenuCaja() {

    return <div class="tablapedidos">
        <div id="lista" class="screen">
            Información de los pedidos
        </div>
        <nav id='menuCaja'>
                <ul>
                    <li><a href=''>Pedidos</a></li>
                    <li><a href=''>Pedidos actuales</a></li>
                    <li><a href=''>Historial de cobros</a></li>
                </ul>
        </nav>
        <table border="i" class="tablapedido">
            <tr>
                <th>Numero</th>
                <th>Fecha</th>
                <th>Rut</th>
                <th>Total</th>
            </tr>
            <tr>
                <td>1</td>
                <td>08/11/2022</td>
                <td>11.685.879-1</td>
                <td>$19990</td>
                <button>Confirmar</button>
                <button class="rechazar">Rechazar</button>
            </tr>
            <tr>
                <td>2</td>
                <td>09/11/2022</td>
                <td>19.215.687-1</td>
                <td>$29990</td>
                <button>Confirmar</button>
                <button class="rechazar">Rechazar</button>
            </tr>
            <tr>
                <td>3</td>
                <td>10/11/2022</td>
                <td>21.275.807-7</td>
                <td>$59990</td>
                <button>Confirmar</button>
                <button class="rechazar">Rechazar</button>
            </tr>
            <tr>
                <td>4</td>
                <td>10/11/2022</td>
                <td>21.275.807-7</td>
                <td>$59990</td>
                <button>Confirmar</button>
                <button class="rechazar">Rechazar</button>
            </tr>
            <tr>
                <td>5</td>
                <td>10/11/2022</td>
                <td>21.275.807-7</td>
                <td>$59990</td>
                <button>Confirmar</button>
                <button class="rechazar">Rechazar</button>
            </tr>
            <tr>
                <td>6</td>
                <td>10/11/2022</td>
                <td>21.275.807-7</td>
                <td>$59990</td>
                <button>Confirmar</button>
                <button class="rechazar">Rechazar</button>
            </tr>
            <tr>
                <td>7</td>
                <td>10/11/2022</td>
                <td>21.275.807-7</td>
                <td>$59990</td>
                <button>Confirmar</button>
                <button class="rechazar">Rechazar</button>
            </tr>
            <tr>
                <td>8</td>
                <td>10/11/2022</td>
                <td>21.275.807-7</td>
                <td>$59990</td>
                <button>Confirmar</button>
                <button class="rechazar">Rechazar</button>
            </tr>
            <tr>
                <td>9</td>
                <td>10/11/2022</td>
                <td>21.275.807-7</td>
                <td>$59990</td>
                <button>Confirmar</button>
                <button class="rechazar">Rechazar</button>
            </tr>
            <tr>
                <td>10</td>
                <td>10/11/2022</td>
                <td>21.275.807-7</td>
                <td>$59990</td>
                <button>Confirmar</button>
                <button class="rechazar">Rechazar</button>
            </tr>
        </table>
    </div>
}