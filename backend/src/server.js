const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const {randomMessage} = require('./helpers/random.words.generator');

dotenv.config();

const app = express();

const {SERVER_PORT:port}=process.env;

app.use(
  cors({
    credentials: true,
    origin: ["*"],
  })
);

setInterval(() => {
    
    randomMessage();
    console.log(">>>>>>>")
}, 1000);


app.listen(port, () => {
  console.log(`server listening to port ${port}`);
});
