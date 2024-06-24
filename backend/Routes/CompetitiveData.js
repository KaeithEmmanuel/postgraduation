const express = require('express');
const router = express.Router();
const Student = require("../models/student");

router.post("/student", async (req, res) => {
  try {
    const {
      Name, Email, RollNo, Branch, Section, PhoneNumber, AdmissionYear, PassoutYear,
      GRETicketNo, GREScore, GRECard, IELTSTicketNo, IELTSScore, IELTSCard,
      TOEFLTicketNo, TOEFLScore, TOEFLCard, GATETicketNo, GATEScore, GATECard,
      GMATTicketNo, GMATScore, GMATCard, CATTicketNo, CATScore, CATCard,
      AlumnaiTicketNo, Graduation
    } = req.body;

    const studentData = await Student.create({
      Name,
      Email,
      RollNo,
      Branch,
      Section,
      PhoneNumber,
      AdmissionYear,
      PassoutYear,
      GRETicketNo,
      GREScore,
      GRECard,
      IELTSTicketNo,
      IELTSScore,
      IELTSCard,
      TOEFLTicketNo,
      TOEFLScore,
      TOEFLCard,
      GATETicketNo,
      GATEScore,
      GATECard,
      GMATTicketNo,
      GMATScore,
      GMATCard,
      CATTicketNo,
      CATScore,
      CATCard,
      AlumnaiTicketNo,
      Graduation
    });

    res.status(200).json(studentData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
