import "./Perfil.css"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


export function Perfil() {
    const [name, setName] = useState();
    const [correo, setCorreo] = useState();
    const [rut, setRut] = useState();
    const [direccion, setDirecion] = useState();
    const [sexo, setSexo] = useState();
    const [fecha_nacimiento, setFecha] = useState();

    const token = localStorage.getItem("token");

    useEffect(() => {
        if (token) {
            axios
                .get("http://localhost:5005/user", {
                    headers: {
                        token: token,
                    },
                })
                .then(({ data }) => (setName(data.nombre), setCorreo(data.correo), setRut(data.rut), setDirecion(data.direccion),
                    setFecha(data.fecha_nacimiento), setSexo(data.sexo)))
                .catch((error) => console.error(error));
        }
    }, [token]);


    return <div>
        <div className="ContainertextPerfil">
            <h2>Tu perfil</h2>
        </div>
        <div className="ContainerList">
            <ul className="list">
                <li>Nombre</li>
                <h3>{`${name}`}</h3>
                <li>Rut</li>
                <h3>{`${rut}`}</h3>
                <li>Sexo</li>
                <h3>{`${sexo}`}</h3>
                <li>Fecha de nacimiento</li>
                <h3>{`${fecha_nacimiento}`}</h3>
                <li>direccion</li>
                <h3>{`${direccion}`}</h3>
                <li>Correo</li>
                <h3>{`${correo}`}</h3>
            </ul>
        </div>

        <div>


        </div>


    </div>
}