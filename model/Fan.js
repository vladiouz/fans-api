const mongoose = require("mongoose");

const FanSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  shortMsg: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Fans", FanSchema);
