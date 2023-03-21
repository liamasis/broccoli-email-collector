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
// Why
app.use("/api/Emails", require("./routes/emailRoutes"));
//Set up api error
//why god why
app.use(errorHandler);

app.listen(port, () => console.log(`we out on here on port ${port} g.`));
