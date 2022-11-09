import { useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Admin.css";
import { useEffect } from "react";

export function GestionUsuario() {
    const [Usuarios, setUsuarios] = useState([])
    const LoadUsers = () => {
        fetch("http://localhost:5005/Usuarios")
            .then(res => res.json())
            .then(TodosUsuarios => setUsuarios(TodosUsuarios))
    }

    LoadUsers()

    const borrarUsuario = ()=>{

    }
    return (
        <div className="contTabla">
            <h3 className="TituloUsuario">Usuarios registrados</h3>
            <div>
                <table className="TablaUsuarios">
                    <thead>
                        <tr>
                            <th scope="col">Rut</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Celular</th>
                            <th scope="col">Direccion</th>
                            <th scope="col">Correo</th>
                            <th>Opciones de usuario</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Usuarios.map((eachUsers) => (
                            <tr>
                                <td>{eachUsers.rut}</td>
                                <td>{eachUsers.nombre}</td>
                                <td>{eachUsers.telefono}</td>
                                <td>{eachUsers.direccion}</td>
                                <td>{eachUsers.correo}</td>
                                <div className="botonOpcionesUsuario">
                                    
                                    <button>""</button>
                                </div>                    
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}