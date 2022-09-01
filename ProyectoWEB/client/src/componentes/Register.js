import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./Register.css"

export const Register = () => {
    const axios = require('axios');
    const [inputs, setInputs] = useState({
        correo: "",
        nombre: "",
        contraseña: "",
    });
    const [mensaje, setMensaje] = useState();
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const { nombre, contraseña, correo } = inputs;

    const HandleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (nombre !== "" && contraseña !== "" && correo !== "") {
            const Usuario = {
                nombre,
                correo,
                contraseña,
            };
            setLoading(true);
            await axios
                .post("http://localhost:5005/register", Usuario)
                .then((res) => {
                    const { data } = res;
                    setMensaje(data.mensaje);
                    setInputs({ nombre: "", contraseña: "", correo: "" });
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
            <div >
                <form onSubmit={(e) => onSubmit(e)}>
                    <h2>Registro</h2>
                    <div >
                        <div >
                            <label htmlFor="nombre">Nombre</label>
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
                            <label htmlFor="correo">Correo</label>
                            <input
                                onChange={(e) => HandleChange(e)}
                                value={correo}
                                name="correo"
                                id="correo"
                                type="email"
                                placeholder="Correo..."
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
                                placeholder="Contraseña..."
                                autoComplete="off"
                            />
                        </div>
                    </div>

                    <button type="submit">
                        {loading ? "Cargando..." : "Registrarme"}
                    </button>
                    <p>
                        Ya tienes una cuenta?{" "}
                        <b onClick={() => navigate("/login")}>Iniciar Sesión</b>
                    </p>
                </form>
            </div>
            {mensaje && <div >{mensaje}</div>}
        </>
    )
}

export default Register

