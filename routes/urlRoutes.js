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
  console.log("Hello")
  res.send("Welocme to URL Shortener \n Creators Gohar and Yura");
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
  let url = req.body.id || "https://www.youtube.com/";
  client.set(shortid, url);
  let newData = new Data({ shortURL: shortid, longURL: url });
  newData.save();
  res.send(shortid);
});




module.exports = router;