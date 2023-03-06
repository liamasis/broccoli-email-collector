const mongoose = require("mongoose");

const emailScheme = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a text value"],
    },
    address: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Email", emailScheme);
