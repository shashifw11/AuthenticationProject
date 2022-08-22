  require("dotenv").config(); 
const jwt = require("jsonwebtoken");
const User = require("../models/user.model") ; 

  const newToken = (user)=>{
    return jwt.sign({user:user },process.env.JWT_SECRET_KEY)  // , { algorithm: 'RS256'}
  }
                 //   exp : 60*5 => if within 5 min token not use then it will expire.

const register = async (req,res)=>{
 try{
      // first check if the email provided is already given to another user
        let user = await User.findOne({email:req.body.email}).lean().exec() ; 
      // if yes then throw an error 400 
      if(user) return res.status(400).send({message : "User with that email already exists"}) ;
       
      // if no then we will create the user
      // we will hash the password for the user.
         user = await User.create(req.body)
          
       //we will create the token for the user
        const token = newToken(user) ; 
    
    // return the token and the user for the user 
      return res.status(201).send({user , token}) ;


    }catch(err){
      return res.status(500).send(err.message);
 }

    return res.send("Register");
}

const login = async (req,res)=>{
   try{
     // first we will find the user with the email 
  let user = await User.findOne({email: req.body.email});
   
     // if user is not found then throw an error 400 bad request .
   if(!user)
     return res.status(400).send({message : "either email or password is incorrect"});

      // if user found then try to match the password provided with the password in db
    const match = user.checkPassword(req.body.password) ; 
  
     // if not match then throw an error 400 bad request 
    if(!match)
    return res.status(400).send({message : "either email or password is incorrect"});

    
    // if password also matches then create a token 
    const token = newToken(user) ; 

    // return the token and the user details 
    return res.status(201).send({user , token});

   }catch(err){
        return res.status(500).send({message : "err.message"});
    }
     return res.send("Login");
}

module.exports = {register , login , newToken} ; 