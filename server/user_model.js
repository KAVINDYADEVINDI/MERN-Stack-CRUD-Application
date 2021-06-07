const mongoose=require('mongoose');
//create schema
const Schema = mongoose.Schema;

let User=new Schema(
    {
        user_name:{
            type:String
        },
        address:{
            type:String
        },
        NIC_number:{
            type:Number
        },

    },{
        collection:'user'
    }
);
module.exports=mongoose.model('user',User);
