const app = require("./index") ; 

const connect = require("./configs/db") ; 

  app.listen(2345 , async()=>{
    try{
        await connect() ; 
        console.log("listning port 2345");
    }catch(err){
        console.log(err.message);
    }
  }
)

