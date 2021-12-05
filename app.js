
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
var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=in&' +
          'apiKey='+apiKey;

var sports_news = 'http://newsapi.org/v2/everything?q=cricket&' +
          'apiKey='+apiKey;

        const news_get =await axios.get(url)
        const sports_get = await axios.get(sports_news);
        res.render('home',{articles:news_get.data.articles.slice(2,-1), articles2: news_get.data.articles[0],articles3: news_get.data.articles[1], cricket:sports_get.data.articles})
        // res.render('home');
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



const port = process.env.PORT || 3000;

app.listen(port,()=>{
  console.log("server started at " + port);
})
