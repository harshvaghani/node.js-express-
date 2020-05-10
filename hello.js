const express = require('express')
const app = express();
const fs = require('fs');
const home = fs.readFileSync('harsh.html');
const about = fs.readFileSync('about.html');
const contact = fs.readFileSync('contact.html');
const services = fs.readFileSync('services.html');
const port = 80
app.get("/",(req,res)=>{
    res.end(home)
})
app.get("/about",(req,res)=>{
    res.end(about)
})
app.get("/contact",(req,res)=>{
    res.end(contact)
})
app.get("/services",(req,res)=>{
    res.end(services)
})
app.get("/harsh",(req,res)=>{
    res.status(404).end("<h1>this page is not found</h1>")
})
app.listen(port,()=>{
    console.log(`your server started running on ${port}`)

})
