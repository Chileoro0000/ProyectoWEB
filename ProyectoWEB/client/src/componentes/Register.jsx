import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./Register.css"

export const Register = () => {
    const axios = require('axios');
    const [inputs, setInputs] = useState({
        correo: "",
        nombre: "",
        contraseña: "",
        rut: "",
        sexo: "",
        direccion: "",
        telefono: "",
        fecha_nacimiento: "",
    });
    const [mensaje, setMensaje] = useState();
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const { nombre, contraseña, correo, rut, sexo, direccion, telefono, fecha_nacimiento } = inputs;

    const HandleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (nombre !== "" && contraseña !== "" && correo !== "" && rut !== "" && direccion !== "" && telefono !== "" && fecha_nacimiento !== "") {
            const Usuario = {
                nombre,
                correo,
                contraseña,
                rut,
                sexo,
                direccion,
                telefono,
                fecha_nacimiento,
            };
            setLoading(true);
            await axios
                .post("http://localhost:5005/register", Usuario)
                .then((res) => {
                    const { data } = res;
                    setMensaje(data.mensaje);
                    setInputs({
                        nombre: "", contraseña: "", correo: "", rut: "",
                        sexo: "",
                        direccion: "",
                        telefono: "",
                        fecha_nacimiento: ""
                    });
                    setTimeout(() => {
                        setMensaje("");
                        navigate("/login");
                    }, 1500);
                })
                .catch((error) => {
                    console.error(error);
                    setMensaje("Hubo un error");
                    setTimeout(() => {
                        setMensaje("");
                    }, 1500);
                });

            setLoading(false);
        }
    };

    return (
        <>
            <div className="ContainerRegister">
                
                <form className="FormRegister" onSubmit={(e) => onSubmit(e)}>
                    <h3 className="textoH3">Registro</h3>
                    <div></div>
                    <div >
                        <div >
                            <label htmlFor="nombre">Nombre completo</label>
                            <input
                                onChange={(e) => HandleChange(e)}
                                value={nombre}
                                name="nombre"
                                id="nombre"
                                type="text"
                                placeholder="Nombre..."
                                autoComplete="off"
                            />
                        </div>
                    </div>

                    <div >
                        <div >
                            <label htmlFor="rut">Rut</label>
                            <input
                                onChange={(e) => HandleChange(e)}
                                value={rut}
                                name="rut"
                                id="nombre"
                                type="text"
                                placeholder="11.222.333-0"
                                autoComplete="off"
                            />
                        </div>
                    </div>

                    <div >
                        <div >
                            <label htmlFor="fecha_nacimiento">Fecha de nacimiento</label>
                            <input
                                onChange={(e) => HandleChange(e)}
                                value={fecha_nacimiento}
                                name="fecha_nacimiento"
                                id="nombre"
                                type="date"
                                placeholder="01/01/1999"
                                autoComplete="off"
                            />
                        </div>
                    </div>

                    <div >
                        <div >
                            <label htmlFor="direccion">Direccion</label>
                            <input
                                onChange={(e) => HandleChange(e)}
                                value={direccion}
                                name="direccion"
                                id="nombre"
                                type="text"
                                placeholder="Direccion..."
                                autoComplete="off"
                            />
                        </div>
                    </div>

                    <div >
                        <div >
                            <label htmlFor="telefono">Telefono</label>
                            <input
                                onChange={(e) => HandleChange(e)}
                                value={telefono}
                                name="telefono"
                                id="nombre"
                                type="text"
                                placeholder="Telefono..."
                                autoComplete="off"
                            />
                        </div>
                    </div>

                    <div >
                        <div>
                            <div class="select" >
                                <label>Sexo</label>

                                <select htmlFor="sexo" onChange={(e) => HandleChange(e)}
                                    value={sexo}
                                    name="sexo"
                                    id="nombre">
                                    <option>--Selecciona--</option>
                                    <option>Masculino</option>
                                    <option>Femenino</option>
                                    <option>No especificar</option>
                                </select>
                                <div class="select_arrow">
                                </div>
                            </div>
                        </div>
                    </div>
     
                    <div >
                        <div >
                            <label htmlFor="correo">Correo</label>
                            <input
                                onChange={(e) => HandleChange(e)}
                                value={correo}
                                name="correo"
                                id="correo"
                                type="email"
                                placeholder="example@mail.com"
                                autoComplete="off"
                            />
                        </div>
                    </div>

                    <div >
                        <div >
                            <label htmlFor="contraseña">Contraseña</label>
                            <input
                                onChange={(e) => HandleChange(e)}
                                value={contraseña}
                                name="contraseña"
                                id="contraseña"
                                type="password"
                                placeholder="*******"
                                autoComplete="off"
                            />
                        </div>
                    </div>


                    <button type="submit" className="boton">
                        {loading ? "Cargando..." : "Registrarme"}
                    </button>
                    <p>
                        Ya tienes una cuenta?{" "}
                        <b onClick={() => navigate("/login")}>Iniciar Sesión</b>
                    </p>
                </form>
            </div>
            <div className="mensaje">     
            {mensaje && <div >{mensaje}</div>}
            </div>
        </>
    )
}

// nombre, rut, fecha de nacimiento, direccion, telefono, correo, contraseña

export default Register

