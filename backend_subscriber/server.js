'use strict'

const express = require("express");
const cors = require("cors");
const app = express();
const http = require('http');
const server = http.createServer(app);
const helmet = require("helmet");

const dotenv = require("dotenv");
const { Server } = require("socket.io");
const {subscribe} = require("./src/subscriber/rabbitmq.subscriber");
const router = require('./src/routes/routes');



dotenv.config();
app.use(cors());
app.use(helmet());
app.use('/v1/api',router);


const { SERVER_PORT: port } = process.env;


const io = new Server(server,{
  cors:{
    origin:"http://localhost:3000",
    methods:["GET"],
    credentials:false
  }
});


io.on('connection',(socket)=>{
  console.log('Client Connected',socket.id);
  
  subscribe(socket);

  socket.on("disconnect",() =>{
    console.log('Client disconnected',socket.id);
  })
})


process.on("uncaughtException", function (err) {
  // Handle the error safely
  console.log(err);
});


server.listen(port, () => {
  console.log(`Subscriber listening to port ${port}`);
  
});


