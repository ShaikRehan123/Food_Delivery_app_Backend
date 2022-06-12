const bodyParser = require("body-parser");
const express = require("express");
const app = express();
require("dotenv").config({
  path: "./config/config.env",
});

const PORT = process.env.PORT || 8888;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send({
    status: 200,
    message: "Welcome to the API",
  });
});

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
