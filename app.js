
require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const ejs = require("ejs");
const https = require("https");
const axios = require("axios");


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));




app.get("/", async (req, res)=>{
const apiKey = process.env.API_KEY;
try{
// var url = 'http://newsapi.org/v2/top-headlines?' +
//           'country=in&' +
//           'apiKey='+apiKey;

//         const news_get =await axios.get(url)
//         console.log(news_get);
//         res.render('home',{articles:news_get.data.articles})
        res.render('home');
  console.log("hello");
  // https.get(url, (response)=>{
  //   response.on("data",(data)=>{
  //     const newsdata = JSON.parse(data);
  //     res.render('home');
} catch (error) {
        if(error.response){
            console.log(error)
        }

    }


});





app.listen(3000,()=>{
  console.log("server started at 3000");
})
