import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminCropManager = () => {
  const [crops, setCrops] = useState([]);

  useEffect(() => {
    fetchCrops();
  }, []);

  const fetchCrops = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/crops');
      setCrops(res.data);
    } catch (error) {
      console.error('Error fetching crops:', error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this crop?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:8080/api/crops/${id}`);
      alert("Deleted Successfully!");
      fetchCrops(); // Refresh list
    } catch (error) {
      alert("Failed to delete");
      console.error(error);
    }
  };

  return (
    <div style={{ padding: '30px' }}>
      <h2>🛠️ Admin Crop Manager</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {crops.map((crop) => (
          <div
            key={crop.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '15px',
              width: '250px',
              backgroundColor: '#f9f9f9'
            }}
          >
            <img
              src={crop.photoUrl}
              alt={crop.name}
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
            <h3>{crop.name}</h3>
            <p><strong>Price:</strong> ₹{crop.price} /kg</p>
            <p><strong>Location:</strong> {crop.location}</p>
            <button
              onClick={() => handleDelete(crop.id)}
              style={{
                marginTop: '10px',
                backgroundColor: '#e74c3c',
                color: 'white',
                padding: '8px 12px',
                border: 'none',
                borderRadius: '5px'
              }}
            >
              ❌ Delete Crop
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminCropManager;
