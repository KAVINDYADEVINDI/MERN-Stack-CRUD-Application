const mongoose=require('mongoose');
//create schema in the database
const Schema = mongoose.Schema;

let User=new Schema(
    {
        user_name:{
            type:String
        },
        address:{
            type:String
        },
        nic_number:{
            type:Number
        },

    },{
        collection:'user'
    }
);
module.exports=mongoose.model('user',User);
