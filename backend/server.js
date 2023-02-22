const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

app.get("/api/goals", (req, res) => {
  res.json({ message: "get bread" });
});

app.listen(port, () => console.log(`we out on here on port ${port} g.`));
