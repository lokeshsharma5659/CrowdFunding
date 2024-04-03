require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn.js");
const router = require("./routes/router");
const cors = require("cors");
const cookiParser = require("cookie-parser")



// const stripe = require('stripe')(process.env.STRIPE_SECRETE_KEY)
// const uuid = require("uuid")
const PORT= process.env.PORT;


// app.get("/",(req,res)=>{
//     res.status(201).json("server created")
// });

app.use(express.json());
app.use(cookiParser());
app.use(cors());
app.use(router);


app.listen(PORT,()=>{
    console.log(`Server listening on PORT : ${PORT}`);
})