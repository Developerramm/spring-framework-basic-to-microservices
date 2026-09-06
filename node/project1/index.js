const express = require("express");
const app = express();
const port = 8080;

// get request
app.get('/',(req,res)=>{
    console.log("This is print in console")
    res.send("<h1>Welcome to home page </h1>")
})

app.get("/about",(req,res)=>{
    res.send("<h3>This is about page </h3>")
})

app.get("/about/user",(req,res)=>{
    res.send("<h3>user page  </h3>")
})
app.get("/random.text",(req,res)=>{
    res.send("<h3>This is random.text page  </h3>")
})

// parameterized route
app.get("/user/:userid",(req,res)=>{

    const {userid} = req.params;
    console.log(userid)
    res.send(req.params)
    
})

app.get("/user/:userid/book/:bookid",(req,res)=>{

    const {userid,bookid} = req.params;
    console.log(userid)
    console.log(bookid)
    res.send(req.params)
    
})

app.get("/search",(req,res)=>{
    const {name,age,city,gender} = req.query;
    console.log(name)
    console.log(age)
    console.log(city)
    console.log(gender)

    // res.send(req.query)

    res.send(`Search result is ${name} ${age} ${city}`)
})

app.listen(port,()=>{
    console.log(`Your app is running on port ${port}`)
})