const mongoose = require("mongoose");
const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

//connecting to DB
module.exports.connectDB = async () => {
  return await mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("DB was connected");
    }
  );
};

//Listening to server
module.exports.connectServer = async () => {
  return await app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
  });
};
