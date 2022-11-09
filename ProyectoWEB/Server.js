const express = require("express");
const cors = require("cors");

const db = require("./database/db");

const controllers = require("./controllers");
const verifyToken = require("./middlewares/verifyToken");


const Producto = require("./model/productos")
const Promos = require("./model/promos")
const Usuarios = require("./model/usuario")

const app = express();
app.use(express.json());
app.use(cors());

app.get("/userID", verifyToken, controllers.getUserById);

app.post("/Ventas", controllers.AddVentas);
app.post("/register", controllers.register);
app.post("/login", controllers.login);


app.get("/TodosLosProductos", controllers.GetProduct);
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

app.get('/Usuarios', async (req, res) => {

  try{
    const arrayUsuariosDB = await Usuarios.find()
    res.json(arrayUsuariosDB)

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
