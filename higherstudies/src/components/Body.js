import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../assets/img1.jpg";
import "./body.css";
import { useNavigate } from "react-router-dom";

export default function Body() {
  const navigate = useNavigate();

  const handleCompetitiveData = () => {
    navigate("/Compdata");
  };

  const handleHigherStudies = () => {
    navigate("/HigherStud");
  };

  return (
    <div className="fullscreen-container">
      <div className="image-overlay"></div>
      <img src={img} alt="" className="fullscreen-image" />
      <div className="button-container">
        <button className="btn btn-white" onClick={handleCompetitiveData}>
          Register your Competitive Data Information &gt;
        </button>
        <button className="btn btn-white" onClick={handleHigherStudies}>
          Register your Higher Studies Information &gt;
        </button>
      </div>
    </div>
  );
}