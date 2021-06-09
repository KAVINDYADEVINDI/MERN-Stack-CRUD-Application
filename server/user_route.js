const express=require('express');
const userRoutes=express.Router();


const User=require('./user_model');

//store data
userRoutes.route('/add').post(function(req,res){
    //get request from body
    let user=new User(req.body);
    //handle http request
    user.save().then(user=>{
        //if status in response is 200
        res.status(200).json({'user':'New user added successfully'});
    })
    .catch(err=>{
        //if status in response is 400
        res.status(400).json("unable to added successfully");
    });

});
//get data
userRoutes.route('/').get(async (req,res)=>{
    await User.find().then(user=>{
        res.json(user);
    })
    .catch(err=>{
        res.status(400).json("unable to get data");
    });
    // const user=await User.find();
    // console.log(user);
    // res.json(user);

});

//edit data
userRoutes.route('/edit/:id').get(function(req,res){
    let id=req.params.id;
    user.findById(id,function(err,user){
        res.json(user);
        
    });

});

//update data
userRoutes.route('/update/:id').put(function(req,res){
    let id=req.params.id;
    user.findById(id,function(err,user){
        if(!user){
            res.status(404).send("data is not found");
        }
        else{
            //update datas comes from request
            user.user_name=req.body.user_name;
            user.address=req.body.address;
            user.NIC_number=req.body.NIC_number;

            //save data to the database
            user.save().then(user=>{
                res.json('Update Complete');
            })
            .catch(err=>{
                //if status in response is 400
                res.status(400).send("unable to Updated");
            });
        }
        
    });

});

//delete data
userRoutes.route('/delete/:id').get(function(req,res){
    let id=req.params.id;
    user.findByIdAndRemove(id,function(err,user){
        if(err)
            console.log(err);
        else{
            res.json('Successfully Removed');
        }
        
    });

});
module.exports=userRoutes;