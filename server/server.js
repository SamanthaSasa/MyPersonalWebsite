const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
require("dotenv").config({ path: "./config.env" });
const Db = process.env.ATLAS_URI;
const port = process.env.PORT;
app.use(cors());
app.use(express.json());
const routes = require("./routes")


app.use("/", routes) // new

app.listen(port, () => {
	console.log("Server has started!")
})

mongoose.connect(Db, { useNewUrlParser: true })