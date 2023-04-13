const mongoose = require("mongoose");

const emailScheme = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name value"],
    },
    address: {
      type: String,
      required: [true, "Please add a email value"],
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Email", emailScheme);
