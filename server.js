require("dotenv").config();
const express = require("express");
const shortID = require("./shortId");

const app = express();

console.log(shortID.generate());

const connections = require("./connections");

connections.connect();
