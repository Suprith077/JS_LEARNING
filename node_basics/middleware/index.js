//create a api structure
//1. log middleware - (global) print the route name in console 
//2.hello middleware - print "hello your name in web page"
//3.count middleware - increase the count and log the count in console,incresed the count whenever you hit any route
const express = require('express')
const app=express()

const log =(req, res, next)=>{
    console.log("log middleware", req.url)
    next();
    }
app.use(log)
// app.use((req,res,next)=>{
//     consol.log("hgdfhgdgh");
//     next();
// })
let c = 0;
const count = (req, res, next)=>{
 c++;
 console.log(c)
 next()
}
app.get("/",count,(req,res)=>{
    res.send("kaalu")
})
app.get("/hello",count,(req,res)=>{
    res.send("hello kaalu")
})
app.listen(3000,()=>{
    console.log("server is running at http://localhost:3000")
})
