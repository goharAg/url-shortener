const mongoose = require("mongoose");

const port = process.env.PORT || 5000;

//connecting to DB
module.exports.connectDB = mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },
   
  );


