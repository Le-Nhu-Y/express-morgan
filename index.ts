import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

const PORT = 3000;
const app=express();

app.use(bodyParser.json());
app.use(morgan("common"))
app.get('/',(req, res)=>{
    res.json({
        message:"Hello every body. I love you!",
    });
})



app.listen(PORT,()=>{
    console.log("Server is running on http://localhost:3000")
});