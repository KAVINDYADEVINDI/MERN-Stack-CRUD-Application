
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


//use app
app.use(express.json());
app.use(cors());
app.use('/user',userRoute);//use route


//connect mongodb
mongoose.Promise=global.Promise;

mongoose.connect(process.env.MONGO_DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=>{
    console.log('connect to database');
    })  
    .catch((err)=>
    console.log('connection error',err)
    );


//connect server 
app.listen(3001, () => { console.log("server is running") })
//3001 is server running port number