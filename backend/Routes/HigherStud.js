const express = require('express');
const router = express.Router();
const HigherStudies = require("../models/higherStudies");

router.post("/submit", async (req, res) => {
  try {
    const {
      email, name, hallTicketNo, phone, branch, section, yearOfAdmission, yearOfPassout,
      programName, universityName, mastersAdmissionYear, specialisation, admissionProof
    } = req.body;

    const higherStudiesData = await HigherStudies.create({
      email,
      name,
      hallTicketNo,
      phone,
      branch,
      section,
      yearOfAdmission,
      yearOfPassout,
      programName,
      universityName,
      mastersAdmissionYear,
      specialisation,
      admissionProof
    });

    res.status(200).json(higherStudiesData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
