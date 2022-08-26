//Creo servidor
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

//modelos
const Producto = require("./models/productos")
const Promos = require("./models/promos")


//Cors
const cors = require("cors")
app.use(cors())


//Controladores
const controllers = require("./controllers/index")


//ruteos
//app.get("/user/:id", controllers.getUserById)
app.post("/register", controllers.register)
app.post("/login", controllers.login)

app.get('/productos', async (req, res) => {

	try{
		const arrayProductosDB = await Producto.find()
		res.json(arrayProductosDB)

	} catch (error){
		console.log(error)
	}
})

app.get('/promos', async (req, res) => {

	try{
		const arrayPromosDB = await Promos.find()
		res.json(arrayPromosDB)

	} catch (error){
		console.log(error)
	}
})



app.listen(8000, () => console.log("Servidor levantado"))

