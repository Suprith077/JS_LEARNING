import express from "express"

const app = express()

app.get("/", (req, res) => {
    let name='suprith'

    res.send("Hello "+name);
})

app.get("/products", async (req,res) => {
    let data = await fetch("https://fakestoreapi.com/products");
    let data1= await data.json();
    let filtereddata = await data1.filter(a => a.id <11); 
    let onlytitle = await filtereddata.map(a => a.title);
    res.send(onlytitle);
})

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
})

