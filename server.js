require("dotenv").config();
const express = require("express");

const app = express();

const connections = require("./connections");

(async () => {
  //connecting to DB
  await connections.connectDB;
  console.log("DB connected")


  const port = process.env.PORT || 5000;
  //connecting to Server
  await app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
  });
})();
