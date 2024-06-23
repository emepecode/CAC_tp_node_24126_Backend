const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("Hola server express");
})


app.listen(port, ()=>{
    console.log(`Ok en el puerto ${port}`)
})