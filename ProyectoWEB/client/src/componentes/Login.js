import "./Login.css"

export const Login = () =>{
    return (
        <div className="centro">
            <h1>Iniciar sesion</h1>
            <form method="post">
                <div className="txt_field">
                    <input type="nombre" required/>
                    <span></span>
                    <label>Nombre</label>
                </div>
                <div className="txt_field">
                    <input type="correo" required/>
                    <span></span>
                    <label>Correo</label>
                </div>
                <div className="txt_field">
                    <input type="contraseña" required/>
                    <span></span>
                    <label>Contraseña</label>
                </div>
                <div className="contra">¿Olvidaste tu contraseña?</div>
                <input type="submit" value="Ingresar"></input>
                <div className="signup_link">
                    <a href="#">Registrarse</a>
                </div>
            </form>
           
        </div>
    )
}

export default Login

