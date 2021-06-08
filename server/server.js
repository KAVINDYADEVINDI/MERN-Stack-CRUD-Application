
//add required packages
const express = require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const cors=require('cors');
const bodyParser=require('body-parser');
//import route page in user
const userRoute=require('./user_route');
// create variable

const app = express();

//dotnev call
dotenv.config();

//call DB.js
const config =require('./DB');
const userRoutes = require('./user_route');

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
//use route
app.use('/user',userRoute);

mongoose.Promise=global.Promise;
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
