const express = require("express");

const router = express.Router() ; 

const User = require("../models/user.model");

router.get("/all" , async (req,res)=>{
  try {
        const user = await User.find({role : "user"},{password : false}).lean().exec() ; 
            return res.status(200).send(user);
    } catch (error) {
         return res.status(400).send({mesage : error.message});
    }
}) ;

router.get("/", async (req, res) => {
  console.log("hello");
  try {
    const user = await User.find().lean().exec();

    return res.status(200).send(user);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});


module.exports = router ; 