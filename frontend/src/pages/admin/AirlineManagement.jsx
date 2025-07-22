
import React, { useState } from 'react';
import '../../css/AirlineManagement.css';

const AirlineDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [airlines, setAirlines] = useState([
    {
      id: 1,
      name: 'Emirates',
      flights: 245,
      addedDate: '2023-05-15'
    },
    {
      id: 2,
      name: 'Qatar Airways',
      flights: 198,
      addedDate: '2023-04-22'
    },
    {
      id: 3,
      name: 'Singapore Airlines',
      flights: 312,
      addedDate: '2023-06-10'
    },
  ]);

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
    // Actual search/filter logic would go here
  };

  const handleEdit = (id) => {
    console.log('Edit airline with id:', id);
    // Edit logic would go here
  };

  const handleDelete = (id) => {
    console.log('Delete airline with id:', id);
    setAirlines(airlines.filter(airline => airline.id !== id));
  };

  const handleAddNew = () => {
    console.log('Add new airline clicked');
    // Add new airline logic would go here
  };

  return (
    <div className="airline-card">
      {/* Top right button */}
      <button onClick={handleAddNew} className="add-new-btn">ADD NEW FLIGHT</button>
      
      {/* Heading */}
      <h1 className="airline-heading">Airline Details</h1>
      
      {/* Search bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search airlines..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-btn">
          Search
        </button>
      </div>
      
      {/* Airlines table */}
      <div className="table-container">
        <table className="airline-table">
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Airline Name</th>
              <th>No. of Flights</th>
              <th>Make Changes</th>
              <th>Added Date</th>
            </tr>
          </thead>
          <tbody>
            {airlines.map((airline, index) => (
              <tr key={airline.id}>
                <td>{index + 1}</td>
                <td>{airline.name}</td>
                <td>{airline.flights}</td>
                <td className="action-buttons">
                  <button 
                    onClick={() => handleEdit(airline.id)}
                    className="edit-btn"
                  >
                    Add Flight
                  </button>
                  <button 
                    onClick={() => handleDelete(airline.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </td>
                <td>{airline.addedDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AirlineDashboard;