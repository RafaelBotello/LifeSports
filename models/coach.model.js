const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const coachSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3
    }
  },
  {
    timestamps: true
  }
);

const Coach = mongoose.model("Coach", coachSchema);

module.exports = Coach;
