import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Nav from './Nav';
import './comp.css';
i
import { useNavigate } from 'react-router-dom';

export default function HigherStudies() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    hallTicketNo: '',
    phone: '',
    branch: '',
    section: '',
    yearOfAdmission: '',
    yearOfPassout: '',
    programName: '',
    universityName: '',
    mastersAdmissionYear: '',
    specialisation: '',
    admissionProof: '',
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://postgraduation.vercel.app/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form submitted successfully!');
        navigate("/acknowledge");
      } else {
        alert('Failed to submit the form.');
      }
    } catch (error) {
      alert('An error occurred: ' + error.message);
    }
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
                  <label htmlFor="email" className="col-sm-6 col-form-label text-black">Email ID <span className="text-danger">*</span></label>
                  <div className="">
                    <input type="email" className="form-control" id="email" placeholder="Enter Email ID" value={formData.email} onChange={handleChange} />
                  </div>
                </div>

                <div className="row mb-3">
                  <label htmlFor="name" className="col-sm-6 col-form-label text-black">Student Name <span className="text-danger">*</span></label>
                  <div className="">
                    <input type="text" className="form-control" id="name" placeholder="Enter Name" value={formData.name} onChange={handleChange} />
                  </div>
                </div>

                <div className="row mb-3">
                  <label htmlFor="hallTicketNo" className="col-sm-6 col-form-label text-black">Hall Ticket No. <span className="text-danger">*</span></label>
                  <div className="">
                    <input type="text" className="form-control" id="hallTicketNo" placeholder="Enter Hall Ticket No." value={formData.hallTicketNo} onChange={handleChange} />
                  </div>
                </div>

                <div className="row mb-3">
                  <label htmlFor="phone" className="col-sm-6 col-form-label text-black">Phone Number <span className="text-danger">*</span></label>
                  <div className="">
                    <input type="tel" className="form-control" id="phone" placeholder="Enter Phone Number" value={formData.phone} onChange={handleChange} />
                  </div>
                </div>

                <div className="row mb-3">
                  <label htmlFor="branch" className="col-sm-6 col-form-label text-black">College Branch <span className="text-danger">*</span></label>
                  <div className="">
                    <div className="form-check">
                      <input type="radio" id="CSE" name="branch" value="CSE" className="form-check-input" onChange={handleRadioChange} />
                      <label htmlFor="CSE" className="form-check-label text-black">CSE</label>
                    </div>
                    <div className="form-check">
                      <input type="radio" id="CSBS" name="branch" value="CSBS" className="form-check-input" onChange={handleRadioChange} />
                      <label htmlFor="CSBS" className="form-check-label text-black">CSBS</label>
                    </div>
                  </div>
                </div>

                <div className="row mb-3">
                  <label htmlFor="section" className="col-sm-6 col-form-label text-black">Section <span className="text-danger">*</span></label>
                  <div className="">
                    <div className="form-check">
                      <input type="radio" id="A" name="section" value="A" className="form-check-input" onChange={handleRadioChange} />
                      <label htmlFor="A" className="form-check-label text-black">A</label>
                    </div>
                    <div className="form-check">
                      <input type="radio" id="B" name="section" value="B" className="form-check-input" onChange={handleRadioChange} />
                      <label htmlFor="B" className="form-check-label text-black">B</label>
                    </div>
                    <div className="form-check">
                      <input type="radio" id="C" name="section" value="C" className="form-check-input" onChange={handleRadioChange} />
                      <label htmlFor="C" className="form-check-label text-black">C</label>
                    </div>
                    <div className="form-check">
                      <input type="radio" id="D" name="section" value="D" className="form-check-input" onChange={handleRadioChange} />
                      <label htmlFor="D" className="form-check-label text-black">D</label>
                    </div>
                  </div>
                </div>

                <div className="row mb-3">
                  <label htmlFor="yearOfAdmission" className="col-sm-6 col-form-label text-black">Year Of Admission <span className="text-danger">*</span></label>
                  <div className="">
                    <input type="text" className="form-control" id="yearOfAdmission" placeholder="Enter Year Of Admission" value={formData.yearOfAdmission} onChange={handleChange} />
                  </div>
                </div>

                <div className="row mb-3">
                  <label htmlFor="yearOfPassout" className="col-sm-6 col-form-label text-black">Year Of Passout <span className="text-danger">*</span></label>
                  <div className="">
                    <input type="text" className="form-control" id="yearOfPassout" placeholder="Enter Year Of Passout" value={formData.yearOfPassout} onChange={handleChange} />
                  </div>
                </div>

                <div className="row mb-3">
                  <label htmlFor="programName" className="col-sm-6 col-form-label text-black">Name Of The Program <span className="text-danger">*</span></label>
                  <div className="">
                    <input type="text" className="form-control" id="programName" placeholder="Enter Program Name" value={formData.programName} onChange={handleChange} />
                  </div>
                </div>

                <div className="row mb-3">
                  <label htmlFor="universityName" className="col-sm-6 col-form-label text-black">Name Of The University <span className="text-danger">*</span></label>
                  <div className="">
                    <input type="text" className="form-control" id="universityName" placeholder="Enter University Name" value={formData.universityName} onChange={handleChange} />
                  </div>
                </div>

                <div className="row mb-3">
                  <label htmlFor="mastersAdmissionYear" className="col-sm-6 col-form-label text-black">Year Of Admission (Masters) <span className="text-danger">*</span></label>
                  <div className="">
                    <input type="text" className="form-control" id="mastersAdmissionYear" placeholder="Enter Year Of Admission" value={formData.mastersAdmissionYear} onChange={handleChange} />
                  </div>
                </div>

                <div className="row mb-3">
                  <label htmlFor="specialisation" className="col-sm-6 col-form-label text-black">Specialisation <span className="text-danger">*</span></label>
                  <div className="">
                    <input type="text" className="form-control" id="specialisation" placeholder="Enter Specialisation" value={formData.specialisation} onChange={handleChange} />
                  </div>
                </div>

                <div className="row mb-3">
                  <label htmlFor="admissionProof" className="col-sm-6 col-form-label text-black">Admission Letter/ Proof Of Admission <span className="text-danger">*</span></label>
                  <div className="">
                    <input type="text" className="form-control" id="admissionProof" placeholder="Upload Drive link" value={formData.admissionProof} onChange={handleChange} />
                  </div>
                </div>

                <div className="text-center">
                  <div className="">
                    <button type="submit" className="btn btn-primary btn-center">Submit</button>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}