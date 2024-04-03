const mongoose = require("mongoose");

const DB = process.env.MONGO_URL

mongoose.connect(DB,()=>{
        console.log("Connected to MongoDB");
}).then(()=> console.log("DataBase Connected"))
   .catch((errr)=>{console.log(errr);
})