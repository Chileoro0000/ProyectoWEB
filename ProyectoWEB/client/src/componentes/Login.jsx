import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./Login.css"

export const Login = () => {
    const axios = require("axios")
    const [inputs, setInputs] = useState({ correo: "", contraseña: "" });
    const [mensaje, setMensaje] = useState();
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const { correo, contraseña } = inputs;

    const HandleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (correo !== "" && contraseña !== "") {
            const Usuario = {
                correo,
                contraseña,
            };
            setLoading(true);
            await axios
                .post("http://localhost:5005/login", Usuario)
                .then((res) => {
                    const { data } = res;
                    setMensaje(data.mensaje);
                    setTimeout(() => {
                        setMensaje("");
                        localStorage.setItem("token", data?.usuario.token);
                        navigate(`/`);
                    }, 1500);
                })
                .catch((error) => {
                    console.error(error);
                    setMensaje("Correo u contraseña incorrecta");
                    setTimeout(() => {
                        setMensaje("");
                    }, 1500);
                });
            setInputs({ correo: "", contraseña: "" });
            setLoading(false);
        }
    };

    return (
        <>
            <div className="ContainerLogin">     
                <form onSubmit={(e) => onSubmit(e)}>
                    <h2>Iniciar sesion</h2>
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
                        {loading ? "Cargando..." : "Iniciar Sesión"}
                    </button>
                    <p>
                        Aun no tienes cuenta?{" "}
                        <b onClick={() => navigate("/register")}>Registrate!</b>
                    </p>
                </form>
            </div>
            {mensaje && <div id="MensajeLogin">{mensaje}</div>}
        </>
    )
}

export default Login

