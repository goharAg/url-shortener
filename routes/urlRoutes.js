const express = require("express")
const router =  express.Router();
const redis = require("redis")
const shortID = require("../shortId")

const client = redis.createClient();

const Data = require("../model/data");

client.on("connect", async () => {
  await Data.find({}, (err, users) => {
    if (err) return;
    users.forEach((element) => {
      client.set(element.shortURL, element.longURL);
    });
  });
});
router.get("/",(req,res)=>{
  res.send("Hello World");
});

router.get("/:shortUrl", (req, res) => {
  client.get(req.params.shortUrl, (err, data) => {
    res.redirect(data);
  });
}); 

//post  request
//long url is included in request body

router.post("/api/set/longUrl", (req, res) => {
  let shortid = shortID.generate();
  client.set(shortid, req.body.id, redis.print);
  let newData = new Data({ shortURL: shortid, longURL: req.body.id });
  newData.save();
  res.send(shortid);
});




module.exports = router;