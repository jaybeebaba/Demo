const express = require("express")
const ejs = require ("ejs")

const app = express();
app.set("view engine", "ejs")
app.use(express.static(__dirname + '/public'));

app.get("/", (req,res)=>{
    res.render("./app")
})

var PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`App started on port ${PORT}`)
})