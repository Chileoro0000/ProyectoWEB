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
        <div class="page-content page-container" id="page-content">
            <div class="padding">
                <div class="row container d-flex justify-content-center">
        <div class="col-xl-6 col-md-12">
                                                <div class="card user-card-full">
                                                    <div class="row m-l-0 m-r-0">
                                                        <div class="col-sm-4 bg-c-lite-green user-profile">
                                                            <div class="card-block text-center text-white">
                                                                <div class="m-b-25">
                                                                    <img src="https://cdn-icons-png.flaticon.com/512/64/64572.png" class="img-radius" alt="User-Profile-Image" width="100px"></img>
                                                                </div>
                                                                <h6 class="f-w-600">Este es tu perfil,  {`${name}`}</h6>
                                                                <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-8">
                                                            <div class="card-block">
                                                                <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Información</h6>
                                                                <div class="row">
                                                                    <div class="col-sm-6">
                                                                        <h6 class="m-b-10 f-w-600">Nombre</h6>
                                                                        <p class="text-muted f-w-400">{`${name}`}</p>
                                                                    </div>
                                                                    <div class="col-sm-6">
                                                                        <h6 class="m-b-10 f-w-600">Rut</h6>
                                                                        <p class="text-muted f-w-400">{`${rut}`}</p>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-sm-6">
                                                                        <h6 class="m-b-10 f-w-600">Sexo</h6>
                                                                        <p class="text-muted f-w-400">{`${sexo}`}</p>
                                                                    </div>
                                                                    <div class="col-sm-6">
                                                                        <h6 class="m-b-10 f-w-600">Fecha de Nacimiento</h6>
                                                                        <p class="text-muted f-w-400">{`${fecha_nacimiento}`}</p>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-sm-6">
                                                                        <h6 class="m-b-10 f-w-600">Dirección</h6>
                                                                        <p class="text-muted f-w-400">{`${direccion}`}</p>
                                                                    </div>
                                                                    <div class="col-sm-6">
                                                                        <h6 class="m-b-10 f-w-600">Correo Electronico</h6>
                                                                        <p class="text-muted f-w-400">{`${correo}`}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                             </div>
                                                </div>
                                            </div>
    </div>
}