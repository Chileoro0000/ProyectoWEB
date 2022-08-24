const express = require('express')
const app = express()

//Conexion base de datos
const mongoose = require("mongoose")
const user = 'proyectosushi';
const password = 'QWmbuGcjisjYg3vI';
const name = "DataBase-Sushi";
const uri = `mongodb+srv://${user}:${password}@cluster0.63v1qkt.mongodb.net/${name}?retryWrites=true&w=majority`;

mongoose
	.connect(uri)
	.then(() => console.log("conectado a BBDD"))

//modelo
const Producto = require("./models/productos")

//ruteo
app.get('/productos', async (req, res) => {

	try{
		const arrayProductosDB = await Producto.find()
		res.json(arrayProductosDB)

	} catch (error){
		console.log(error)
	}
})



app.listen(5005, () => console.log("Servidor levantado"))

