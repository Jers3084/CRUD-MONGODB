const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { dbConnection } = require("./config/database/mongodb");
const alumnosRouter = require("./routes/alumnosRouter");
const profesoresRouter = require('./routes/profesoresRouter');
require("dotenv").config();

const app = express();
dbConnection();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/alumnos", alumnosRouter);
app.use("/api/profesores", profesoresRouter);

app.listen(process.env.PORT, () => {
  console.log("corriendo servidor en Port.."+process.env.PORT);
});
