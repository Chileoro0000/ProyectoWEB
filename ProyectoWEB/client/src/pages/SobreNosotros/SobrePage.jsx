import { Menu } from "../../componentes/Menu/Menu"
import { Footer } from "../../componentes/Footer/Footer"
import "./sobrePage.css"

const SobreNosotrosPage = () => {
    return (<>
        <div class="sobre">
            <Menu />
            <section>
                <h1 id="TextoSobre">Sobre Nosotros</h1>
                <p classname="Parrafo" >Somos una empresa dedicada a la preparación y venta de sushi en nuestro propio local, estamos ubicados en la comuna de Maipú, con
                    una capacidad máxima de atención de 12 personas.<br /> La atención se realiza en forma personalizada donde los clientes eligen los productos a consumir previa
                    lectura de la carta confeccionada para este objetivo.<br /> La segunda modalidad es la venta de comida para llevar, en donde usted realiza su pedido en mesón
                    para llevarlo a su domicilio.</p>
            </section>
        </div>

        <div class="row">

        <iframe class ="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13304.930052751579!2d-70.79176996044917!3d-33.521339899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662dd250eb3bcbb%3A0x2b992ee2c8602356!2sDelivery%20Sushi%20Maipu!5e0!3m2!1ses!2scl!4v1663558300991!5m2!1ses!2scl"></iframe>

    </div>
        <div id="Containersobre">
            <div class="card-sobre">
                <div class="content-sobre">
                    <div class="front-sobre">
                        <h3 class="title-sobre">Dato 1</h3>
                        <p class="subtitle-sobre"></p>
                    </div>

                    <div class="back-sobre">
                        <p class="description-sobre">
                            Pagina web creada por Gabriel, Tomas, Jean.
                        </p>
                    </div>
                </div>
            </div>
            <div class="card-sobre">
                <div class="content-sobre">
                    <div class="front-sobre">
                        <h3 class="title-sobre">Dato 1</h3>
                        <p class="subtitle-sobre"></p>
                    </div>

                    <div class="back-sobre">
                        <p class="description-sobre">
                            Pagina web creada por Gabriel, Tomas, Jean.
                        </p>
                    </div>
                </div>
            </div>
            <div class="card-sobre">
                <div class="content-sobre">
                    <div class="front-sobre">
                        <h3 class="title-sobre">Dato 1</h3>
                        <p class="subtitle-sobre"></p>
                    </div>

                    <div class="back-sobre">
                        <p class="description-sobre">
                            Cool description so you can read it too my friend
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
        
        <Footer />
    </>
    )
}
export default SobreNosotrosPage
