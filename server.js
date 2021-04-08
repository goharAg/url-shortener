require("dotenv").config();
const express = require("express");
const urlRouter = require("./routes/urlRoutes");

const app = express();
app.use(express.json())


app.use("/",urlRouter);


const connections = require("./connections");
const { urlencoded } = require("express");

connections.connect(app);


