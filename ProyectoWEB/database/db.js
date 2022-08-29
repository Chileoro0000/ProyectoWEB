const mongoose = require("mongoose");
const user = 'proyectosushi';
const password = 'QWmbuGcjisjYg3vI';
const name = "DataBase-Sushi";
const uri = `mongodb+srv://${user}:${password}@cluster0.63v1qkt.mongodb.net/${name}?retryWrites=true&w=majority`;

const db = async () => {
  await mongoose
    .connect(uri)
    .then(() => console.log("Conectado a la BBDD"))
    .catch((error) => console.error(error));
};

module.exports = db
