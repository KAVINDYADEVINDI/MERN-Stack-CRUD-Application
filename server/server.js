
//add required packages
const express = require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
// create variable

const app = express();
//dotnev call
dotenv.config();

//call DB.js
const config =require('./DB');

app.use(express.json());

//connect mongodb
mongoose.connect(process.env.MONGO_DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // onfulfilled:()=>{console.log('connect to database')},
    // onrejected:err=>{console.log('cannot connect to database'+err)}
})

//connect server 
app.listen(3001, () => { console.log("server is running") })
