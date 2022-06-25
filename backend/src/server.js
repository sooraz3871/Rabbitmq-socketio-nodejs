const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')

dotenv.config();

const app = express();

const {SERVER_PORT:port}=process.env;

app.use(
  cors({
    credentials: true,
    origin: ["*"],
  })
);

// routes(app);

app.listen(port, () => {
  console.log(`server listening to port ${port}`);
});
