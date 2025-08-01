import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadCrop from "./pages/UploadCrop";
import MandiRates from "./pages/MandiRates";
import CropBazaar from "./pages/CropBazaar";
import AdminCropManager from "./pages/AdminCropManager";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UploadCrop />} />
        <Route path="/mandi" element={<MandiRates />} />
        <Route path="/bazaar" element={<CropBazaar />} />
        <Route path="/admin/crops" element={<AdminCropManager />} />
      </Routes>
    </Router>
  );
}

export default App;
