const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { randomMessage } = require("./helpers/randomwords.helper");
const { publish } = require("./publisher/rabbitmq.publisher");

dotenv.config();

const app = express();

const { SERVER_PORT: port } = process.env;

app.use(
  cors({
    credentials: true,
    origin: ["*"],
  })
);

try {
  setInterval(() => {
    const message = randomMessage();
    publish(message.newObj);
  }, 1000);
} catch (error) {
  console.log(error);
}
process.on("uncaughtException", function (err) {
  // Handle the error safely
  console.log(err);
});

app.listen(port, () => {
  console.log(`server listening to port ${port}`);
});
