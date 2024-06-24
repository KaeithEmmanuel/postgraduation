import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Nav from './Nav';
import './comp.css'
import { useNavigate } from 'react-router-dom';


export default function CompetitiveData() {
  const [formData, setFormData] = useState({
    Email: '',
    Name: '',
    RollNo: '',
    PhoneNumber: '',
    Branch: '',
    Section: '',
    AdmissionYear: '',
    PassoutYear: '',
    GRETicketNo: '',
    GREScore: '',
    GRECard: '',
    IELTSTicketNo: '',
    IELTSScore: '',
    IELTSCard: '',
    TOEFLTicketNo: '',
    TOEFLScore: '',
    TOEFLCard: '',
    GATETicketNo: '',
    GATEScore: '',
    GATECard: '',
    GMATTicketNo: '',
    GMATScore: '',
    GMATCard: '',
    CATTicketNo: '',
    CATScore: '',
    CATCard: '',
    OtherExam: '',
    OtherExamRollNo: '',
    OtherExamScore: '',
    OtherExamCard: '',
    AlumnaiTicketNo: '',
    Graduation: ''
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    fetch('https://postgraduation.vercel.app/api/student',  {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success');
        navigate("/acknowledge");
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <Nav />
      <div className="bg-light-green py-4">
      <div className="container" style={{ marginTop: '80px' }}>
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <label htmlFor="Email" className="form-label text-black">Email ID <span className="text-danger">*</span></label>
                <input type="email" className="form-control" id="Email" placeholder="Enter Email ID" value={formData.Email} onChange={handleChange} />
              </div>
              <div className="row mb-3">
                <label htmlFor="Name" className="form-label text-black">Student Name <span className="text-danger">*</span></label>
                <input type="text" className="form-control" id="Name" placeholder="Enter Name" value={formData.Name} onChange={handleChange} />
              </div>
              <div className="row mb-3">
                <label htmlFor="RollNo" className="form-label text-black">Hall Ticket No. <span className="text-danger">*</span></label>
                <input type="text" className="form-control" id="RollNo" placeholder="Enter Hall Ticket No." value={formData.RollNo} onChange={handleChange} />
              </div>
              <div className="row mb-3">
                <label htmlFor="PhoneNumber" className="form-label text-black">Phone Number <span className="text-danger">*</span></label>
                <input type="tel" className="form-control" id="PhoneNumber" placeholder="Enter Phone Number" value={formData.PhoneNumber} onChange={handleChange} />
              </div>
              <div className="row mb-3">
                <label htmlFor="Branch" className="form-label text-black">College Branch <span className="text-danger">*</span></label>
                <div className="form-check">
                  <input type="radio" id="CSE" name="Branch" value="CSE" className="form-check-input" onChange={handleRadioChange} />
                  <label htmlFor="CSE" className="form-check-label text-black">CSE</label>
                </div>
                <div className="form-check">
                  <input type="radio" id="CSBS" name="Branch" value="CSBS" className="form-check-input" onChange={handleRadioChange} />
                  <label htmlFor="CSBS" className="form-check-label text-black">CSBS</label>
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="Section" className="form-label text-black">Section <span className="text-danger">*</span></label>
                <div className="form-check">
                  <input type="radio" id="A" name="Section" value="A" className="form-check-input" onChange={handleRadioChange} />
                  <label htmlFor="A" className="form-check-label text-black">A</label>
                </div>
                <div className="form-check">
                  <input type="radio" id="B" name="Section" value="B" className="form-check-input" onChange={handleRadioChange} />
                  <label htmlFor="B" className="form-check-label text-black">B</label>
                </div>
                <div className="form-check">
                  <input type="radio" id="C" name="Section" value="C" className="form-check-input" onChange={handleRadioChange} />
                  <label htmlFor="C" className="form-check-label text-black">C</label>
                </div>
                <div className="form-check">
                  <input type="radio" id="D" name="Section" value="D" className="form-check-input" onChange={handleRadioChange} />
                  <label htmlFor="D" className="form-check-label text-black">D</label>
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="AdmissionYear" className="form-label text-black">Year Of Admission <span className="text-danger">*</span></label>
                <input type="text" className="form-control" id="AdmissionYear" placeholder="Enter Year Of Admission" value={formData.AdmissionYear} onChange={handleChange} />
              </div>
              <div className="row mb-3">
                <label htmlFor="PassoutYear" className="form-label text-black">Year Of Passout <span className="text-danger">*</span></label>
                <input type="text" className="form-control" id="PassoutYear" placeholder="Enter Year Of Passout" value={formData.PassoutYear} onChange={handleChange} />
              </div>
              <div className="row mb-3">
                <label htmlFor="GRETickerNo" className="form-label text-black">GRE Roll No.</label>
                <input type="text" className="form-control" id="GRETickerNo" placeholder="Enter GRE Roll No." value={formData.GRETickerNo} onChange={handleChange} />
              </div>
              <div className="row mb-3">
                <label htmlFor="GREScore" className="form-label text-black">GRE Score</label>
                <input type="text" className="form-control" id="GREScore" placeholder="Enter GRE Score" value={formData.GREScore} onChange={handleChange} />
              </div>
              <div className="row mb-3">
                <label htmlFor="GRECard" className="form-label text-black">GRE Score Card</label>
                <input type="text" className="form-control" id="GRECard" placeholder="Upload Drive link" value={formData.GRECard} onChange={handleChange} />
              </div>
              <div className="row mb-3">
                <label htmlFor="IELTSTicketNo" className="form-label text-black">IELTS Roll No.</label>
                <input type="text" className="form-control" id="IELTSTicketNo" placeholder="Enter IELTS Roll No." value={formData.IELTSTicketNo} onChange={handleChange} />
              </div>
              <div className="row mb-3">
                <label htmlFor="IELTSScore" className="form-label text-black">IELTS Score</label>
                <input type="text" className="form-control" id="IELTSScore" placeholder="Enter IELTS Score" value={formData.IELTSScore} onChange={handleChange} />
              </div>
              <div className="row mb-3">
                <label htmlFor="IELTSCard" className="form-label text-black">IELTS Score Card</label>
                <input type="text" className="form-control" id="IELTSCard" placeholder="Upload Drive link" value={formData.IELTSCard} onChange={handleChange} />
              </div>
              <div className="row mb-3">
                <label htmlFor="TOEFLTicketNo" className="form-label text-black">TOEFL Roll No.</label>
                <input type="text" className="form-control" id="TOEFLTicketNo" placeholder="Enter TOEFL Roll No." value={formData.TOEFLTicketNo} onChange={handleChange} />
              </div>
              <div className="row mb-3">
                <label htmlFor="TOEFLScore" className="form-label text-black">TOEFL Score</label>
                <input type="text" className="form-control" id="TOEFLScore" placeholder="Enter TOEFL Score" value={formData.TOEFLScore} onChange={handleChange} />
              </div>
              <div className="row mb-3">
                <label htmlFor="TOEFLCard" className="form-label text-black">TOEFL Score Card</label>
                <input type="text" className="form-control" id="TOEFLCard" placeholder="Upload Drive link" value={formData.TOEFLCard} onChange={handleChange} />
              </div>
              <div className="row mb-3">
                <label htmlFor="GATETicketNo" className="form-label text-black">GATE Roll No.</label>
                <input type="text" className="form-control" id="GATETicketNo" placeholder="Enter GATE Roll No." value={formData.GATETicketNo} onChange={handleChange} />
              </div>
              <div className="row mb-3">
                <label htmlFor="GATEScore" className="form-label text-black">GATE Score</label>
                <input type="text" className="form-control" id="GATEScore" placeholder="Enter GATE Score" value={formData.GATEScore} onChange={handleChange} />
              </div>
              <div className="row mb-3">
                <label htmlFor="GATECard" className="form-label text-black">GATE Score Card</label>
                <input type="text" className="form-control" id="GATECard" placeholder="Upload Drive link" value={formData.GATECard} onChange={handleChange} />
              </div>
              <div className="row mb-3">
                <label htmlFor="GMATTicketNo" className="form-label text-black">GMAT Roll No.</label>
                <input type="text" className="form-control" id="GMATTicketNo" placeholder="Enter GMAT Roll No." value={formData.GMATTicketNo} onChange={handleChange} />
              </div>
              <div className="row mb-3">
                <label htmlFor="GMATScore" className="form-label text-black">GMAT Score</label>
                <input type="text" className="form-control" id="GMATScore" placeholder="Enter GMAT Score" value={formData.GMATScore} onChange={handleChange} />
              </div>
              <div className="row mb-3">
                <label htmlFor="GMATCard" className="form-label text-black">GMAT Score Card</label>
                <input type="text" className="form-control" id="GMATCard" placeholder="Upload Drive link" value={formData.GMATCard} onChange={handleChange} />
              </div>
              <div className="row mb-3">
                <label htmlFor="CATTicketNo" className="form-label text-black">CAT Roll No.</label>
                <input type="text" className="form-control" id="CATTicketNo" placeholder="Enter CAT Roll No." value={formData.CATTicketNo} onChange={handleChange} />
              </div>
              <div className="row mb-3">
                <label htmlFor="CATScore" className="form-label text-black">CAT Score</label>
                <input type="text" className="form-control" id="CATScore" placeholder="Enter CAT Score" value={formData.CATScore} onChange={handleChange} />
              </div>
              <div className="row mb-3">
                <label htmlFor="CATCard" className="form-label text-black">CAT Score Card</label>
                <input type="text" className="form-control" id="CATCard" placeholder="Upload Drive link" value={formData.CATCard} onChange={handleChange} />
              </div>
              <div className="row mb-3">
                <label htmlFor="OtherExam" className="form-label text-black">Other Exam</label>
                <input type="text" className="form-control" id="OtherExam" placeholder="Enter Other Exam Name" value={formData.OtherExam} onChange={handleChange} />
              </div>
              <div className="row mb-3">
                <label htmlFor="OtherExamRollNo" className="form-label text-black">Other Exam Roll No.</label>
                <input type="text" className="form-control" id="OtherExamRollNo" placeholder="Enter Other Exam Roll No." value={formData.OtherExamRollNo} onChange={handleChange} />
              </div>
              <div className="row mb-3">
                <label htmlFor="OtherExamScore" className="form-label text-black">Other Exam Score</label>
                <input type="text" className="form-control" id="OtherExamScore" placeholder="Enter Other Exam Score" value={formData.OtherExamScore} onChange={handleChange} />
              </div>
              <div className="row mb-3">
                <label htmlFor="OtherExamCard" className="form-label text-black">Other Exam Score Card</label>
                <input type="text" className="form-control" id="OtherExamCard" placeholder="Upload Drive link" value={formData.OtherExamCard} onChange={handleChange} />
              </div>
              <div className="row mb-3">
                <label htmlFor="AlumnaiTicketNo" className="form-label text-black">Alumnai Reference No.</label>
                <input type="text" className="form-control" id="AlumnaiTicketNo" placeholder="Enter Alumnai Reference No." value={formData.AlumnaiTicketNo} onChange={handleChange} />
              </div>
              <div className="row mb-3">
                <label htmlFor="Graduation" className="form-label text-black">Graduation</label>
                <div className="form-check">
                  <input type="radio" id="UG" name="Graduation" value="UG" className="form-check-input" onChange={handleRadioChange} />
                  <label htmlFor="UG" className="form-check-label text-black">UG</label>
                </div>
                <div className="form-check">
                  <input type="radio" id="PG" name="Graduation" value="PG" className="form-check-input" onChange={handleRadioChange} />
                  <label htmlFor="PG" className="form-check-label text-black">PG</label>
                </div>

              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
            <p className=""><span className="text-danger">*</span> represents mandatory</p>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}