const express = require("express");

const app = express();

const TokenRoute = require("./routes/token");

app.listen(7000, () => {
  console.log("Node Server is running");
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Mpesa work man");
});

app.use("/token", TokenRoute);
