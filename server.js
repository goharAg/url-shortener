require("dotenv").config();
const express = require("express");

const app = express();

const connections = require("./connections");

(async () => {
  //connecting to DB
  await connections.connectDB();

  //connecting to Server
  await connections.connectServer();
})();
