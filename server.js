require("dotenv").config();
const express = require("express");

const app = express();

const connections = require("./connections");

connections.connect();


