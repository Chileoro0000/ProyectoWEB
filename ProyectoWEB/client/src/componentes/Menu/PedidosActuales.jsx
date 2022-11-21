import { useState } from "react";
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import "./MenuCaja.css"


export function PedidosActuales() {
    const [Ventas, setVentas] = useState([])
    const LoadVentas = () => {
        fetch("http://localhost:5005/ventasDia")
            .then(res => res.json())
            .then(TodosVentas => setVentas(TodosVentas))
    }


    const styles = StyleSheet.create({
        page: {
            flexDirection: 'row',
            backgroundColor: '#E4E4E4'
        },
        section: {
            margin: 10,
            padding: 10,
            flexGrow: 1
        }
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
                                    <Page size="A4" style={styles.page}>
                                        <View style={styles.section}>
                                            <Text>{eachVentas.fecha}</Text>
                                        </View>
                                        <View style={styles.section}>
                                            <Text>{eachVentas.total}</Text>
                                        </View>
                                        <View style={styles.section}>
                                            <Text>{eachVentas.comprador_id}</Text>
                                        </View>
                                    </Page>
                                </Document>} fileName="boleta.pdf">
                                    {({ blob, url, loading, error }) => (loading ? 'Descargando boleta...' : 'Descargar boleta!')}
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