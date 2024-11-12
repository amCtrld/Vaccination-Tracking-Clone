const { mongoose, Schema } = require("mongoose");

const PatientEntrySchema = new Schema(
  {
    phase: {
      type: Number,
      enum: [1, 2, 3],
    },
    vaccineID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vaccine",
    },
    patientID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
    },
    status: {
      type: String,
      enum: ["study", "approved", "failed"],
    },
  },
  {
    timestamps: true,
  }
);

const PatientEntry = mongoose.model("PatientEntry", PatientEntrySchema);
module.exports = PatientEntry;
