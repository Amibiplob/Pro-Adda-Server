const express = require("express");

const app = express();
const cors = require("cors");
const port = process.env.port || 5000;
app.use(cors())
app.use(express.json())













app.get("/",(req,res)=>{
    res.send("server is working")
})
app.listen(port,()=>{
    console.log("server is working",port);
})