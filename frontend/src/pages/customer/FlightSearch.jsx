import React, { useState } from 'react';
import { FaPlane, FaSearch } from 'react-icons/fa';
import '../../CSS/FlightSearch.css';
import { useNavigate } from 'react-router-dom';
import { searchFlights } from '../../services/customerService/flightSearchService';

const FlightSearch = () => {
  const navigate = useNavigate();

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departureDate, setDepartureDate] = useState('');

  const customerSearchFlight = async (e) => {
    e.preventDefault();

    try {
      const flights = await searchFlights(from, to, departureDate);

      // You can store in context/state or pass via navigation
      navigate('/flightlist', { state: { flights } });

    } catch (error) {
      alert("Failed to fetch flights. Please try again.");
    }
  };

  return (
    <div className="hero-section">
      <div className="booking-card">
        <div className="booking-header">
          <FaPlane className="booking-icon" />
          <h2>Book A Flight</h2>
        </div>

        <form className="booking-form" onSubmit={customerSearchFlight}>
          <div className="form-row">
            <div className="form-group">
              <div className="input-container">
                <label>From</label>
                <input 
                  type="text" 
                  placeholder="Enter departure city"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="booking-input"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="input-container">
                <label>To</label>
                <input 
                  type="text" 
                  placeholder="Enter destination city"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="booking-input"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="input-container">
                <label>Departure Date</label>
                <input 
                  type="date" 
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  className="booking-input"
                  required
                />
              </div>
            </div>
          </div>

          <button type="submit" className="search-btn">
            <FaSearch className="search-icon" />
            Search Flights
          </button>
        </form>
      </div>
    </div>
  );
};

export default FlightSearch;
