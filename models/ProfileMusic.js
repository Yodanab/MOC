const mongoose = require("mongoose");

const ProfileMusician = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },

  instruments: [
    {
      Instrument: {
        type: String,
        level: String,
        main: Boolean,
      },
    },
  ],
  level: {
    type: String,
  },
  about: {
    type: String,
  },
});

module.exports = ProfileMusician = mongoose.model("musician", ProfileMusician);
