
//add required packages
const express = require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
//import route page in user
const userRoute=require('./user_route');
// create variable

const app = express();
//dotnev call
dotenv.config();

//call DB.js
const config =require('./DB');
const userRoutes = require('./user_route');

app.use(express.json());

//use route
app.use('/user',userRoute);

//connect mongodb
mongoose.connect(process.env.MONGO_DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log('connect to database');
})  
 .catch((err)=>
console.log('connection error',err));

//connect server 
app.listen(3001, () => { console.log("server is running") })
