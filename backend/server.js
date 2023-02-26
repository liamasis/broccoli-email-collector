const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();
const router = express;

app.use('/api/goals', require('./routes/goalRoutes'));

app.listen(port, () => console.log(`we out on here on port ${port} g.`));
