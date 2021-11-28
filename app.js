const express = require('express');
const bodyParser = require("body-parser");
const ejs = require("ejs");
const https = require("https");


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));




app.get("/", async (req, res)=>{
  // const url = 'https://newsapi.org/v2/everything?q=india&apiKey=';
  // await https.get(url,(response)=>{
    res.render('home');
  //   console.log(response);
  // })
})





app.listen(3000,()=>{
  console.log("server started at 3000");
})
