'use strict'

const express = require("express");
const cors = require("cors");
const app = express();
const http = require('http');
const server = http.createServer(app);
const dotenv = require("dotenv");
const { Server } = require("socket.io");
const {subscribe} = require("./src/subscriber/rabbitmq.subscriber");


dotenv.config();
app.use(cors());


const io = new Server(server,{
  cors:{
    origin:"*",
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

app.get('/health-check',(req,res)=>{
  res.status(200).send("Subscriber Working");
})


server.listen(process.env.SERVER_PORT, () => {
  console.log(`subscriber listening to port ${process.env.SERVER_PORT}`);
  
});


