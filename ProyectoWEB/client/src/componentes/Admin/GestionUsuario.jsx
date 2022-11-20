import { useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Admin.css";
import { useEffect } from "react";

export function GestionUsuario() {
    const [ users, setUsers ] = useState([])
    const [ search, setSearch ] = useState("")

    const API = "http://localhost:5005/Usuarios"
    const showData = async () =>{
        const response = await fetch(API)
        const data = await response.json()
        console.log(data)
        setUsers(data)
    }
    // Busqueda
    const searcher = (e) =>{
        setSearch(e.target.value)
        console.log(e.target.value)
    }

    //Filtrado
    let results = []
    if(!search)
    {
        results = users 
    }else{
        results = users.filter( (dato)=>
            dato.nombre.toLowerCase().includes(search.toLocaleLowerCase())
        )  
    }
    useEffect(()=>{
        showData()
    }, [])


    const borrarUsuario = ()=>{

    }
    return (
        <div className="contTabla">
            <h3 className="TituloUsuario">Usuarios registrados</h3>
            <input calue={search} onChange={searcher} type="text" placeholder="Buscar Usuarios" className="busqueda"></input>
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
                        {results.map((eachUsers) => (
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