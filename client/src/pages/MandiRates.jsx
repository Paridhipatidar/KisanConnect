import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MandiRates = () => {
  const [mandiData, setMandiData] = useState([]);
  const [selectedCrop, setSelectedCrop] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/mandi.json')
      .then((res) => setMandiData(res.data))
      .catch((err) => console.error('Error fetching mandi data:', err));
  }, []);

  const uniqueCrops = [...new Set(mandiData.map(item => item.crop))];
  const filteredData = selectedCrop
    ? mandiData.filter(item => item.crop === selectedCrop)
    : mandiData;

  return (
    <div style={{ padding: '20px' }}>
      <h1>🌾 Mandi Rates Comparison</h1>

      <label>Select Crop: </label>
      <select onChange={(e) => setSelectedCrop(e.target.value)} value={selectedCrop}>
        <option value="">-- All Crops --</option>
        {uniqueCrops.map(crop => (
          <option key={crop} value={crop}>{crop}</option>
        ))}
      </select>

      <table border="1" style={{ marginTop: '20px', width: '100%', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>Crop</th>
            <th>City</th>
            <th>Price (₹/Quintal)</th>
          </tr>
        </thead>
      <tbody>
  {filteredData.map((entry, index) => (
    <tr key={index}>
      <td>{entry.crop}</td>
      <td>{entry.location}</td>
      <td>₹{entry.price}</td>
    </tr>
  ))}
</tbody>

      </table>
    </div>
  );
};

export default MandiRates;
