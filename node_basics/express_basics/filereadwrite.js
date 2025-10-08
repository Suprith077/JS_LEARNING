const fs= require("fs");

//write file
//fs.writeFileSync("data.txt","hello bhai");

//read file
const dataa=fs.readFileSync("data.txt","utf-8")
console.log(dataa)

//append data
fs.appendFileSync("data.txt" ,"jhgcasgcscg")

fs.readFile("data.txt","utf-8" ,(err,data)=>{
    if(err) throw err;
    console.log(data)
})