import React from "react";
// import thankYouImage from "../assets/thanks.jpg"; // Replace with your actual image path

export default function AcknowledgeComponent() {
  return (
    <div className="container mt-5 d-block mx-auto ">
      <div className="card bg-success text-white text-center">
        {/* <img src={thankYouImage} className="card-img-top" alt="Thank You" /> */}
        <div className="card-body">
          <h5 className="card-title">Acknowledgment</h5>
          <p className="card-text">
            Thank you for your submission! Your form has been received.
          </p>
        </div>
      </div>
    </div>
  );
}