const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now,
  },
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  RollNo: {
    type: String,
    required: true,
  },
  Branch: {
    type: String,
    required: true,
  },
  Section: {
    type: String,
    required: true,
  },
  AdmissionYear: {
    type: String,
    required: true,
  },
  PassoutYear: {
    type: String,
    required: true,
  },
  PhoneNumber: {
    type: Number,
    required: true,
  },
  GRETicketNo: {
    type: Number,
  },
  GREScore: {
    type: Number,
  },
  GRECard: {
    type: String,
  },
  IELTSTicketNo: {
    type: Number,
  },
  IELTSScore: {
    type: Number,
  },
  IELTSCard: {
    type: String,
  },
  TOEFLTicketNo: {
    type: Number,
  },
  TOEFLScore: {
    type: Number,
  },
  TOEFLCard: {
    type: String,
  },
  GATETicketNo: {
    type: Number,
  },
  GATEScore: {
    type: Number,
  },
  GATECard: {
    type: String,
  },
  GMATTicketNo: {
    type: Number,
  },
  GMATScore: {
    type: Number,
  },
  GMATCard: {
    type: String,
  },
  CATTicketNo: {
    type: Number,
  },
  CATScore: {
    type: Number,
  },
  CATCard: {
    type: String,
  },
  AlumnaiTicketNo: {
    type: Number,
  },
  Graduation: {
    type: String,
  },
});

const StudentModel = mongoose.model("Student", StudentSchema);
module.exports = StudentModel;
