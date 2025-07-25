import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadCrop from "./pages/UploadCrop";
import ViewCrops from "./pages/ViewCrops";
import MandiRates from "./pages/MandiRates";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UploadCrop />} />
        <Route path="/crops" element={<ViewCrops />} />
        <Route path="/mandi" element={<MandiRates />} />
      </Routes>
    </Router>
  );
}

export default App;
