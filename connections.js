const mongoose = require("mongoose");

const express = require("express");



const port = process.argv[2] || process.env.PORT || 3003;

//connecting to DB and Server
module.exports.connect = async (app) => {
  return await mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("DB was connected");
      connectServer(app);
    }
  );
};

//Listening to server
async function connectServer(app) {
  return await app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
  });
}


