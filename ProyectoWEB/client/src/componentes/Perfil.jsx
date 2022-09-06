import "./Perfil.css"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


export function Perfil() {
    const [name, setName] = useState();
    const [correo, setCorreo] = useState();

    const token = localStorage.getItem("token");

    useEffect(() => {
        if (token) {
            axios
                .get("http://localhost:5005/user", {
                    headers: {
                        token: token,
                    },
                })
                .then(({ data }) => (setName(data.nombre), setCorreo(data.correo)))
                .catch((error) => console.error(error));
        }
    }, [token]);


    return <div>
        <div className="ContainertextPerfil">
            <h2>Tu perfil</h2>
        </div>
        <div>
            <ul className="listIzquierda">
                <li>Nombre</li>
                <h3>{`${name}`}</h3>
                <li>Correo</li>
                <h3>{`${correo}`}</h3>
            </ul>
        </div>
    </div>
}