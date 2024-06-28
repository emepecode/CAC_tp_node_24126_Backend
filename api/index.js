require("dotenv").config();

const express = require("express");
const cors = require("cors");
const database = require("./data/db")
const app = express();
const port = process.env.PORT || 3000;

const paseadoresRouter = require("./routes/paseadoresRouter");


app.use(cors());
app.use(express.json());


app.use("/paseadores", paseadoresRouter);

app.get("/", (req,res)=>{
    res.send("Home");
})


const conexionDb = async ()=>{
    try {
        await database.authenticate();
        console.log("conectado ok a la bbdd");
    } catch (error) {
        console.log(`el error es ${error}`);
    }
} 

app.listen(port, ()=>{
    conexionDb();
    console.log(`Ok en el puerto ${port}`)
})