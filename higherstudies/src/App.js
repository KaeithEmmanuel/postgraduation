import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Ensure you have a Footer component
import Home from "./components/Layout"
import CompetitiveData from "./components/CompetitiveData";
import HigherStudies from "./components/HigherStudies";
import AcknowledgeComponent from "./components/AcknowledgeComponent";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Compdata" element={<CompetitiveData />} />
        <Route path="/HigherStud" element={<HigherStudies />} />
        <Route path="/acknowledge" element={<AcknowledgeComponent />} />
      </Routes>
    </Router>
  );
}

export default App;