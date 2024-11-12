const { mongoose, Schema } = require("mongoose");

const PatientSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    bloodGroup: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
      required: true,
    },
    contact: {
      type: String,
      required: true,
      unique: true,
      minlength: 10,
      maxlength: 15,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^\S+@\S+\.\S+$/,
    },
    image: {
      type: String,
    },
    medicalHistory: {
      type: String,
    },
    allergies: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Patient = mongoose.model("Patient", PatientSchema);
module.exports = Patient;
