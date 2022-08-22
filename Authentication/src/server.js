const app = require("./index") ; 
const dotenv = require("dotenv");

const connect = require("./configs/db") ; 

 const PORT = process.env.PORT || 2345 ; 

  app.listen( PORT , async()=>{
    try{
        await connect() ; 
        console.log(`listning port ${PORT}`);
    }catch(err){
        console.log(err.message);
    }
  }
)


