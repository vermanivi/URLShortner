const express = require('express'); //importing express
const app = express();
require('dotenv').config();
//importing dot environment
const mongoose = require('mongoose');

const routes = require("./routes/index.js");
//importing mongoose
//we need DB_URL top connect to database ---->found in windows powershell
const dburl = process.env.DB_URL; //taking it from .env
const port = process.env.PORT;

app.use(express.json()) //when data will arrive it will convert in json format

mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true })

//check if connection is successfull or not
mongoose.connection.on("connected", function() {
    console.log("connected to" + dburl);
})
mongoose.connection.on("error", function(error) {
        console.log("Connection error" + error);
    })
    //------------------x-----------------------------

app.get("/api", routes); //this says that all the routes will carry api

app.get('/', (req, res) => {
    res.send("Hello");
})
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})