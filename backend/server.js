const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

const app = express();
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/Emails", require("./routes/emailRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`we out on here on port ${port} g.`));
