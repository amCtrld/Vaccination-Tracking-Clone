const { mongoose, Schema } = require("mongoose");

const PatientRecordSchema = new Schema(
  {
    patientID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
    },
    recordNumber: {
      type: String,
    },
    status: {
        type: String,
        enum: ["Stable", "Unstable"],
        required: true,
      },
    vitals: {
      bloodPressure: {
        type: String,
      },
      heartRate: {
        type: String,
      },
      temperature: {
        type: String,
      },
      respiratoryRate: {
        type: String,
      },
    },
    medication: {
      type: String,
    },
    observation: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const PatientRecord = mongoose.model("PatientRecord", PatientRecordSchema);
module.exports = PatientRecord;
