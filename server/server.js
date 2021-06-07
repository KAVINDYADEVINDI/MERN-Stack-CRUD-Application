const express = require('express');
const mongoose=require('mongoose');
// create variable

const app = express();

app.use(express.json());

//connect mongodb
mongoose.connect('mongodb://localhost:27017/usersAuth',{
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

//connect server 
app.listen(3001, () => { console.log("server is running") })
