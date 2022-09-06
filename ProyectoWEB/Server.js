//Creo servidor
const express = require("express");
//Seguridad del servidor
const cors = require("cors");

//Conectar con la base de datos
const db = require("./database/db");

//Controladores de POST
const controllers = require("./controllers");
const verifyToken = require("./middlewares/verifyToken");


//modelos
const Producto = require("./model/productos")
const Promos = require("./model/promos")

const app = express();
app.use(express.json());
app.use(cors());

//Ruteos
//Usuario
app.get("/user", verifyToken, controllers.getUserById);
app.post("/register", controllers.register);
app.post("/login", controllers.login);
app.post("/actDatos", controllers.actualizarDatos);


//Carro
app.get("/productos-carro", controllers.GetProductCart);
app.post("/productos-carro", controllers.AddProductCart);
app.put("/productos-carro/:productId", controllers.PutProduct);
app.delete("/productos-carro/:productId", controllers.DeleteProduct);

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

const PORT = 5005;
app.listen(PORT, () => {
  console.log(`Servidor funcionando... hhtps://LocalHost ${PORT}`);
  db();
});

module.exports = app;
