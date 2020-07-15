const express = require("express")
const ejs = require ("ejs")

const app = express();
app.set("view engine", "ejs")
app.use(express.static(__dirname + '/public'));

app.get("/", (req,res)=>{
    res.render("./app")
})

app.listen(5000, ()=>{
    console.log("App started at port 5000")
})