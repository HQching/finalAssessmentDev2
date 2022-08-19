const order = require("./order");
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

app = express(); //this is an instance of Express Application (web server)
app.use(cors());
app.use(bodyparser.json());

app.use(order.router); 

app.listen(8080); //listen to port 8080
