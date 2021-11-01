const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
  res.send(req.body);
})

app.listen(8080,()=>{
  console.log("Listening");
})
