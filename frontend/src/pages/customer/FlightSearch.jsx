import React from 'react';
import { FaPlane, FaSearch } from 'react-icons/fa';
import '../../CSS/FlightSearch.css';
import { useNavigate } from 'react-router-dom';


const FlightSearch = () => {

  const navigate = useNavigate()

  const customerSearchFlight = () =>{
    // make the customer dashboard to have the customer all info about flight
    navigate("/flightlist")
  }



  return (
    <div className="hero-section">
      {/* Flight Booking Card */}
      <div className="booking-card">
        <div className="booking-header">
          <FaPlane className="booking-icon" />
          <h2>Book A Flight</h2>
        </div>
        
        <form className="booking-form">
          <div className="form-row">
            <div className="form-group">
              <div className="input-container">
                <label>From</label>
                <input 
                  type="text" 
                  placeholder="Enter departure city" 
                  className="booking-input"
                />
              </div>
            </div>
            
            <div className="form-group">
              <div className="input-container">
                <label>To</label>
                <input 
                  type="text" 
                  placeholder="Enter destination city" 
                  className="booking-input"
                />
              </div>
            </div>
            
            <div className="form-group">
              <div className="input-container">
                <label>Departure Date</label>
                <input 
                  type="date" 
                  className="booking-input"
                />
              </div>
            </div>
          </div>
          
          <button
          onClick={customerSearchFlight}
           type="submit" className="search-btn">
            <FaSearch className="search-icon" />
            Search Flights
          </button>
        </form>
      </div>
    </div>
  );
};

export default FlightSearch;