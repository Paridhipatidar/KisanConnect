// src/pages/CropBazaar.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CropBazaar = () => {
  const [crops, setCrops] = useState([]);
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');

 useEffect(() => {
  fetchCrops();
}, []);

const fetchCrops = async () => {
  try {
    const res = await axios.get('http://localhost:8080/api/crops');
    console.log("📦 Crops fetched:", res.data);
    setCrops(res.data);
  } catch (error) {
    console.error('❌ Error fetching crops:', error);
  }
};


  const filteredCrops = crops.filter(
    (crop) =>
      crop.name.toLowerCase().includes(search.toLowerCase()) &&
      crop.location.toLowerCase().includes(location.toLowerCase())
  );

  return (
    <div style={{ padding: '30px' }}>
      <h2>🌾 Crop Bazaar – Available Crops</h2>

      {/* Filters */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search by crop name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <input
          type="text"
          placeholder="Search by location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={{ padding: '5px' }}
        />
      </div>

      {/* Crop Cards */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {filteredCrops.map((crop) => (
          <div
            key={crop.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '15px',
              width: '250px',
            }}
          >
            <img
              src={crop.photoUrl}
              alt={crop.name}
              style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px' }}
            />
            <h3>{crop.name}</h3>
            <p><strong>Price:</strong> ₹{crop.price} /kg</p>
            <p><strong>Quantity:</strong> {crop.quantity} kg</p>
            <p><strong>Location:</strong> {crop.location}</p>
             <p><strong>Farmer:</strong> {crop.farmerName}</p>
            <a
              href={`https://wa.me/91${crop.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                marginTop: '10px',
                backgroundColor: '#25D366',
                color: 'white',
                padding: '8px 12px',
                borderRadius: '5px',
                textDecoration: 'none',
              }}
            >
              📞 Contact on WhatsApp
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CropBazaar;
