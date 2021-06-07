const mongoose=require('mongoose');
//create schema
const Schema = mongoose.Schema;

let User=new Schema(
    {
        user_name:{
            type:String,
            required=true
        },
        address:{
            type:String,
            required=true
        },
        NIC_number:{
            type:Number,
            required=true
        },

    },{
        collection:'user'
    }
);
module.exports=mongoose.model('user',User);
