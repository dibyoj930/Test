//require("dotenv").config();

const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.json());
MONGODB_URI="mongodb://localhost:27017/fullcalendar"


mongoose.connect(MONGODB_URI,{
    useUnifiedTopology:true,
    useNewUrlParser:true
});

app.use("/api/calendar",require("./Controllers/Calendar1"))
app.listen(3000,()=>console.log("server started"))

