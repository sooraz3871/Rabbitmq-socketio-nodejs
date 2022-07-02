"use strict";

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();



const router = require('./src/routes/routes');
const { PublishMessage } = require("./src/controller/publish.controller");

dotenv.config();

const { SERVER_PORT: port } = process.env;

app.use(
  cors({
    credentials: false,
    methods: ["GET"],
    origin: ["http://localhost"],
  })
);

app.use('/v1/api',router);

//Publish 20 random msg to the queue in an interval of 1 second
setInterval(() => {
  PublishMessage();
}, 1000);




//Catch UncaughtException
process.on("uncaughtException", function (err) {
  console.log(err);
});


app.listen(port, () => {
  console.log(`producer listening to port ${port}`);
});
