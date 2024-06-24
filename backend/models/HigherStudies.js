const mongoose = require("mongoose");

const HigherStudiesSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  hallTicketNo: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  yearOfAdmission: {
    type: Number,
    required: true,
  },
  yearOfPassout: {
    type: Number,
    required: true,
  },
  programName: {
    type: String,
    required: true,
  },
  universityName: {
    type: String,
    required: true,
  },
  mastersAdmissionYear: {
    type: Number,
    required: true,
  },
  specialisation: {
    type: String,
    required: true,
  },
  admissionProof: {
    type: String,
    required: true,
  },
});

const HigherStudies = mongoose.model("HigherStudies", HigherStudiesSchema);
module.exports = HigherStudies;
