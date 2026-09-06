const express = require("express");
const app = express();
const port = 8080;

// get request
app.get('/',(req,res)=>{
    console.log("This is print in console")
    res.send("<h1>This is first express route</h1>")
})

app.listen(port,()=>{
    console.log(`Your app is running on port ${port}`)
})