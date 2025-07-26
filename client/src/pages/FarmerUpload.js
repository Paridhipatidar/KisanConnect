import React, { useState } from 'react';
import axios from 'axios';

const FarmerUpload = () => {
  const [formData, setFormData] = useState({
    name: '',
    quantityKg: '',
    pricePerKg: '',
    imageUrl: '',
    location: '',
    farmerName: '',
    farmerPhone: '',
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/crops', formData);
      setSuccess(true);
      setFormData({
        name: '',
        quantityKg: '',
        pricePerKg: '',
        imageUrl: '',
        location: '',
        farmerName: '',
        farmerPhone: '',
      });
    } catch (error) {
      console.error("❌ Failed to upload crop:", error);
      setSuccess(false);
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '2rem' }}>
      <h2>🧑‍🌾 Upload Your Crop</h2>
      {success && <p style={{ color: 'green' }}>✅ Crop uploaded successfully!</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Crop Name" value={formData.name} onChange={handleChange} required /><br /><br />
        <input type="number" name="quantityKg" placeholder="Quantity (Kg)" value={formData.quantityKg} onChange={handleChange} required /><br /><br />
        <input type="number" name="pricePerKg" placeholder="Price per Kg" value={formData.pricePerKg} onChange={handleChange} required /><br /><br />
        <input type="text" name="imageUrl" placeholder="Image URL" value={formData.imageUrl} onChange={handleChange} /><br /><br />
        <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required /><br /><br />
        <input type="text" name="farmerName" placeholder="Farmer Name" value={formData.farmerName} onChange={handleChange} required /><br /><br />
        <input type="text" name="farmerPhone" placeholder="Phone Number" value={formData.farmerPhone} onChange={handleChange} required /><br /><br />
        <button type="submit">📤 Upload Crop</button>
      </form>
    </div>
  );
};

export default FarmerUpload;
