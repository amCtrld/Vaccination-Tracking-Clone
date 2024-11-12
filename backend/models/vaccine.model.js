const { mongoose, Schema } = require("mongoose");

const VaccineSchema = new Schema(
  {
    name: {
      type: String,
    },
    type: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Vaccine = mongoose.model("Vaccine", VaccineSchema);
module.exports = Vaccine;
