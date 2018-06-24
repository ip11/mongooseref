const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const port = process.env.port || 1234;
const dbconnect = require('./DBConnect');
var app = express();

const sellerroute = require('./routes/seller');
const carroute = require('./routes/car');
app.use(bodyparser.json());

app.use("/", sellerroute);
app.use('/',carroute);





app.listen(port,(err)=>{
    if(err)
        throw err
    console.log(`Sever is started ${port}`);
});







