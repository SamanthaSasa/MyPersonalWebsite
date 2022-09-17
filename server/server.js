const express = require("express");
const app = express();
const mongoose = require('mongoose');
require("dotenv").config({ path: "./config.env" });
const Db = process.env.ATLAS_URI;
const port = process.env.PORT;
const helmet = require('helmet');
app.use(helmet());
app.use(express.json());
const routes = require("./routes")


app.use("/", routes) // new

app.listen(port, () => {
	console.log("Server has started!")
})

mongoose.connect(Db, { useNewUrlParser: true },function(err) {
    if (err)
        return console.error(err);
})