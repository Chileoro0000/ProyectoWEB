import { Link } from "react-router-dom"
import "./Footer.css"

export function Footer() {
    return <div className="DivFooter">
        <footer>
            <div class="container__footer">
                <div class="box__footer">
                    {/* <div class="logo">
                        <img src="Images/logo-magtimus.png" alt="" />
                    </div> */}
                    <div class="terms">
                        <h2>¿Por qué preferirnos?</h2>
                        <p>Somos los mejores sushi de Maipu desde 1998, tenemos historia. Despacho a domicilio, consumo en local y retiro de lunes a sábado de 12:00 a 17:00 y de 18:00 a 23:30 hrs.</p>
                    </div>
                </div>
                {/* <div class="box__footer">
                    <h2>Soluciones</h2>
                    <a href="https://www.google.com">App Desarrollo</a>
                    <a href="#">App Marketing</a>
                    <a href="#">IOS Desarrollo</a>
                    <a href="#">Android Desarrollo</a>
                </div> */}
                <div class="box__footer">
                    <h2>¿Quierés trabajar con nosotros?</h2>
                    <a href="j.henrquezfuentes@uandresbello.edu">Correo para solicitar empleo</a>
                    <h2> ¿Problema con algún pedido?</h2>
                    <a href="j.henrquezfuentes@uandresbello.edu">Contacto para reportar problemas</a>
                </div>

                {/* <div class="box__footer">
                    <h2>Compañia</h2>
                    <a href="#">Acerca de</a>
                    <a href="#">Trabajos</a>
                    <a href="#">Procesos</a>
                    <a href="#">Servicios</a>              
                </div> */}
                <div class="box__footer">
                    <h2>Metodos de pago</h2>
                    <div class="credit-cards">
                        <img height="40" src="https://shoplineimg.com/assets/footer/card_visa.png"/>
                        <img height="40" src="https://shoplineimg.com/assets/footer/card_master.png"/>
                        <img height="40" src="https://shoplineimg.com/assets/footer/card_paypal.png"/>
                    </div>            
                </div>

                <div class="box__footer">
                    <h2>Redes Sociales</h2>
                    <a href="https://www.facebook.com/profile.php?id=100063487151360"> <i class="fab fa-facebook-square"></i> Facebook</a>
                    <a href="https://twitter.com/SushiNowARG"><i class="fab fa-twitter-square"></i> Twitter</a>
                    {/* <a href="#"><i class="fab fa-linkedin"></i> Linkedin</a> */}
                    <a href="https://www.instagram.com/fukusuke.matsuo/"><i class="fab fa-instagram-square"></i> Instagram</a>
                </div>

            </div>

            <div class="box__copyright">
                <hr />
                    <p>Todos los derechos reservados © 2022 <b>FukusukeSushi</b></p>
            </div>
            </footer>
    </div>
}