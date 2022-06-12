const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const NODE_ENV = "development";
require("dotenv").config({
  path: `./config/.env.${NODE_ENV}`,
});

const PORT = process.env.PORT || 8080;
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
