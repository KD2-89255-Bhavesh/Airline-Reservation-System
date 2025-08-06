import React from 'react';
import { FaPlane, FaClock, FaChair, FaArrowLeft } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../CSS/FlightList.css';
import "bootstrap/dist/css/bootstrap.min.css";

const FlightList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const flights = location.state?.flights || [];
  const searchParams = location.state?.searchParams || {};

  const handleSelect = (flight, classType) => {
    // Prepare complete booking data
    const bookingData = {
      flight: {
        id: flight.id,
        flightNumber: flight.flightNumber,
        airline: flight.airline,
        source: flight.source,
        destination: flight.destination,
        departureTime: flight.departureTime,
        arrivalTime: flight.arrivalTime,
        duration: flight.duration,
        prices: flight.prices,
        seatsAvailable: flight.seatsAvailable
      },
      classType: classType,
      searchParams: searchParams,
      selectedPrice: flight.prices[classType.toLowerCase()],
      selectedSeats: flight.seatsAvailable[classType.toLowerCase()],
      timestamp: new Date().toISOString()
    };

    // Store complete booking data in sessionStorage
    sessionStorage.setItem('flightBookingData', JSON.stringify(bookingData));
    
    // Navigate to passenger details
    navigate('/customer/passengerdetails');
  };

  return (
    <div className="compact-flight-list container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <button 
          className="btn btn-outline-secondary"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft className="me-2" />
          Back to Search
        </button>
        <h2>Available Flights ({flights.length})</h2>
        <div></div>
      </div>

      {flights.length === 0 ? (
        <div className="alert alert-info text-center">
          No flights available for the selected route and date.
        </div>
      ) : (
        <div className="compact-flights-container">
          {flights.map((flight, index) => (
            <div key={index} className="compact-flight-card card mb-4">
              <div className="compact-flight-header card-header d-flex align-items-center">
                <FaPlane className="compact-flight-icon me-2" />
                <span className="compact-flight-number fw-bold me-3">{flight.flightNumber}</span>
                <span className="compact-airline">{flight.airline}</span>
              </div>

              <div className="compact-route-info card-body">
                <div className="compact-route-section">
                  <span className="compact-city fw-bold">{flight.source}</span>
                  <span className="compact-time text-muted">{flight.departureTime}</span>
                </div>

                <div className="compact-route-separator">
                  <div className="compact-duration">
                    <FaClock className="compact-duration-icon" />
                    <span>{flight.duration}</span>
                  </div>
                  <div className="compact-flight-line"></div>
                </div>

                <div className="compact-route-section">
                  <span className="compact-city fw-bold">{flight.destination}</span>
                  <span className="compact-time text-muted">{flight.arrivalTime}</span>
                </div>
              </div>

              <div className="compact-class-options card-footer">
                {Object.entries(flight.prices).map(([type, price]) => (
                  <div key={type} className="compact-class-option">
                    <div className="compact-class-info">
                      <FaChair className={`compact-class-icon ${type}`} />
                      <div>
                        <span className="compact-class-name fw-bold">
                          {type === "firstClass" ? "First Class" : 
                           type.charAt(0).toUpperCase() + type.slice(1)}
                        </span>
                        <span className="compact-price text-primary fw-bold">
                          ₹{price.toLocaleString()}
                        </span>
                        <small className={`d-block ${flight.seatsAvailable[type] < 10 ? 'text-danger' : 'text-muted'}`}>
                          {flight.seatsAvailable[type]} seats left
                        </small>
                      </div>
                    </div>
                    <button
                      className={`compact-select-btn btn ${flight.seatsAvailable[type] <= 0 ? 'btn-secondary' : 'btn-primary'}`}
                      onClick={() => handleSelect(flight, type)}
                      disabled={flight.seatsAvailable[type] <= 0}
                    >
                      {flight.seatsAvailable[type] > 0 ? 'Select' : 'Sold Out'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FlightList;