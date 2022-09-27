import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./Register.css"
import firebaseApp from "../../firebase/firebaseConfig"
import { createUserWithEmailAndPassword, getAuth} from "firebase/auth"
const auth = getAuth(firebaseApp)

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
            createUserWithEmailAndPassword(auth, correo, contraseña);
        }
    };
    

    return (
        
        <>
            

            <form className="formulario_register" onSubmit={(e) => onSubmit(e)}>
                <h2 className="formulario_tituloRegister">Registro</h2>

                        
                <input
                    className="formulario_input"
                    onChange={(e) => HandleChange(e)}
                    value={nombre}
                    name="nombre"
                    type="text"
                    placeholder="Nombre Apellido Apellido"
                    autoComplete="off"
                />
                <label for="" id="formulario_label" htmlFor="nombre">Nombre completo</label>

                
                <input
                    className="formulario_input"
                    onChange={(e) => HandleChange(e)}
                    value={rut}
                    name="rut"
                    type="text"
                    placeholder="12345678-9"
                    autoComplete="off"
                />
                <label for="" id="formulario_label" htmlFor="rut">Rut</label>

                
                <input
                    className="formulario_input"    
                    onChange={(e) => HandleChange(e)}
                    value={fecha_nacimiento}
                    name="fecha_nacimiento"
                    type="date"
                    autoComplete="off"
                />
                <label for="" id="formulario_label_nacimiento" htmlFor="fecha_nacimiento">Fecha de nacimiento</label>

                
                <input
                    className="formulario_input"
                    onChange={(e) => HandleChange(e)}
                    value={direccion}
                    name="direccion"
                    type="text"
                    placeholder="Ej: Psje/Calle Nxx"
                    autoComplete="off"
                />
                <label for="" id="formulario_label" htmlFor="direccion">Direccion</label>

                
                <input
                    className="formulario_input"
                    onChange={(e) => HandleChange(e)}
                    value={telefono}
                    name="telefono"
                    type="text"
                    placeholder="+56 91234567"
                    autoComplete="off"
                />
                <label for="" id="formulario_label" htmlFor="telefono">Telefono</label>
                    
                <select className="select_formulario_input" htmlFor="sexo" onChange={(e) => HandleChange(e)}
                        value={sexo}
                        name="sexo"
                        > 
                        <option>--Selecciona--</option>
                        <option>Masculino</option>
                        <option>Femenino</option>
                        <option>No especificar</option>
                </select>
                <div class="select_arrow"></div>          
                <label for="" id="formulario_label" >Sexo</label>

                <input
                    className="formulario_input"
                    onChange={(e) => HandleChange(e)}
                    value={correo}
                    name="correo"
                    type="email"
                    placeholder="example@ej.com"
                    autoComplete="off"/>
                <label for="" id="formulario_label" htmlFor="correo">Correo</label>

                
                <input
                    className="formulario_input"
                    onChange={(e) => HandleChange(e)}
                    value={contraseña}
                    name="contraseña"
                    type="password"
                    placeholder="************"
                    autoComplete="off" 
                />
                <label for="" id="formulario_label" htmlFor="contraseña">Contraseña</label>


                <button type="submit" className="boton_registro">
                    {loading ? "Cargando..." : "Registrarme"}
                </button>
                <p className="LinkToLogin">
                    Ya tienes una cuenta?{" "}
                    <b onClick={() => navigate("/login")}>Iniciar Sesión</b>
                </p>
            </form>
            <div className="mensaje">
                {mensaje && <div >{mensaje}</div>}
            </div>
            
        </>
    )
}

// nombre, rut, fecha de nacimiento, direccion, telefono, correo, contraseña

export default Register

