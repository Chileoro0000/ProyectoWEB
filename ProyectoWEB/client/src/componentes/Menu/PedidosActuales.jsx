import { useState, useEffect } from "react";
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import "./MenuCaja.css"
import axios from "axios";

export function PedidosActuales() {

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
                .get("http://localhost:5005/userID", {
                    headers: {
                        token: token,
                    },
                })
                .then(({ data }) => (setName(data.nombre), setCorreo(data.correo), setRut(data.rut), setDirecion(data.direccion),
                    setFecha(data.fecha_nacimiento), setSexo(data.sexo)))
                .catch((error) => console.error(error));
        }
    }, [token]);


    const [Ventas, setVentas] = useState([])
    const LoadVentas = () => {
        fetch("http://localhost:5005/ventasDia")
            .then(res => res.json())
            .then(TodosVentas => setVentas(TodosVentas))
    }


    const styles = StyleSheet.create({
        page: {
            page: { backgroundColor: 'tomato', display: "flex" },
            section: { color: 'white', textAlign: 'center' }
        },

    });

    LoadVentas()
    return (
        <div className="contTabla">
            <h3 className="TituloPedidos">Lista de pedidos</h3>
            <div>
                <table className="TablaPedidos">
                    <thead>
                        <tr>
                            <th scope="col">ID del comprador</th>
                            <th scope="col">ID pedido</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Ventas.map((eachVentas) => (
                            <tr>
                                <td>{eachVentas.comprador_id}</td>
                                <td>{eachVentas._id}</td>
                                <td>{eachVentas.fecha}</td>
                                <td>{eachVentas.total}</td>
                                <PDFDownloadLink document={<Document>
                                    <Page size="A4" style={{ backgroundColor: "black" }}>
                                        <Image style={{ width: "200px", height: "100px", alignSelf: "center" }}
                                            src="data:image/png;base64,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" />
                                        <View style={{ display: "flex", flexDirection: "row", padding: "15px", color: "white" }}>
                                            <Text>FUKUSUKE </Text>
                                        </View>
                                        <View style={{
                                            display: "flex",
                                            alignItems: "flex-end",
                                            margin: "5px",
                                            padding: "20px",
                                            color: "white"
                                        }}>
                                            <Text>FECHA DEL PEDIDO: {eachVentas.fecha}</Text>
                                        </View>
                                        <View style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            margin: "5px",
                                            border: "5px solid #fff",
                                            padding: "20px",
                                            borderRadius: "5px",
                                            color: "white"
                                        }}>
                                            <View style={{
                                                padding: "35px",
                                                color: "white"
                                            }}>
                                                <Text>TOTAL DEL PEDIDO: {eachVentas.total}</Text>
                                            </View>
                                            <View style={{
                                                padding: "35px",
                                                color: "white"
                                            }}>
                                                <Text>ID DEL COMPRADOR: {eachVentas.comprador_id}</Text>
                                            </View>
                                            <View style={{
                                                padding: "35px",
                                                color: "white"
                                            }}>
                                                <Text>ID DEL PEDIDO: {eachVentas._id}</Text>
                                            </View>

                                            <View style={{
                                                color: "white",
                                                display: "flex",
                                                flexDirection: "row",
                                                justifyContent: "flex-end",
                                                padding: "25px"
                                            }}>
                                                <Text>ESTADO DEL PEDIDO: CONFIRMADO</Text>
                                            </View>
                                        </View>
                                        <View style={{
                                            color: "white",
                                            padding: "50px",
                                            fontSize: "35px",
                                            alignItems: "center",
                                        }}>
                                            <Text>¡GRACIAS POR SU COMPRA!</Text>
                                        </View>
                                    </Page>
                                </Document>} fileName="boleta.pdf">
                                    {({ blob, url, loading, error }) => (loading ? 'Descargando boleta...' : 'BOLETA')}
                                </PDFDownloadLink>

                                /

                                <PDFDownloadLink document={<Document>
                                    <Page size="A4" style={{ backgroundColor: "white" }}>
                                        <Text>{name}</Text>
                                    </Page>
                                </Document>} fileName="despacho.pdf">
                                    
                                    {({ blob, url, loading, error }) => (loading ? 'Descargando despacho...' : 'DESPACHO')}
                                </PDFDownloadLink>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div>

            </div>
        </div>
    );
}