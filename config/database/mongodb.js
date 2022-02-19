const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION);
    console.log("Conectado a la DB escuela");
  } catch (e) {
    console.log("problema al conectarse a la BD");
    console.log(e);
    throw new Error("Problema con la conexion");
  }
};

module.exports = { dbConnection };
