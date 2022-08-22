const mongoose = require("mongoose");

module.exports = ()=>{
    return mongoose.connect("mongodb+srv://Authentication:Authentication@cluster0.ohkkfy1.mongodb.net/Authentication?retryWrites=true&w=majority");
}


//mongodb://127.0.0.1:27017/Authentication

//mongodb+srv://Authentication:Authentication@cluster0.ohkkfy1.mongodb.net/Authentication?retryWrites=true&w=majority 

// "repository": {
//     "type": "git",
//     "url": "git+https://github.com/shashifw11/AuthBackend.git"
//   },