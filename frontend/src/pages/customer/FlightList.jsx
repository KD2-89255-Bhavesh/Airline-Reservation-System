import React from 'react';
import { FaPlane, FaClock, FaChair } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../CSS/FlightList.css';
import "bootstrap/dist/css/bootstrap.min.css";

const FlightList = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get flights from state passed via navigation (fallback to dummy)
  const flights = location.state?.flights || [];

  const handleSelect = (flight, classType) => {
    navigate('/passengerdetails', {
      state: {
        flightInfo: {
          flightNumber: flight.flightNumber,
          airline: flight.airline,
          route: `${flight.source} to ${flight.destination}`,
          departureTime: flight.departureTime,
          arrivalTime: flight.arrivalTime,
          duration: flight.duration,
          classType: classType,
          price: flight.prices[classType.toLowerCase()],
          seatsAvailable: flight.seatsAvailable[classType.toLowerCase()]
        },
        passengerCount: 1
      }
    });
  };

  return (
    <div className="compact-flight-list container mt-4">
      <h2 className="mb-4">Available Flights ({flights.length})</h2>

      {flights.length === 0 ? (
        <p>No flights available for the selected route and date.</p>
      ) : (
        <div className="compact-flights-container">
          {flights.map((flight, index) => (
            <div key={index} className="compact-flight-card card mb-4">
              <div className="compact-flight-header card-header">
                <FaPlane className="compact-flight-icon" />
                <span className="compact-flight-number">{flight.flightNumber}</span>
                <span className="compact-airline">{flight.airline}</span>
              </div>

              <div className="compact-route-info card-body">
                <div className="compact-route-section">
                  <span className="compact-city">{flight.source}</span>
                  <span className="compact-time">{flight.departureTime}</span>
                </div>

                <div className="compact-route-separator">
                  <div className="compact-duration">
                    <FaClock className="compact-duration-icon" />
                    <span>{flight.duration}</span>
                  </div>
                  <div className="compact-flight-line"></div>
                </div>

                <div className="compact-route-section">
                  <span className="compact-city">{flight.destination}</span>
                  <span className="compact-time">{flight.arrivalTime}</span>
                </div>
              </div>

              <div className="compact-class-options card-footer">
                {["economy", "business", "firstClass"].map((type) => (
                  <div key={type} className="compact-class-option">
                    <div className="compact-class-info">
                      <FaChair className={`compact-class-icon ${type}`} />
                      <div>
                        <span className="compact-class-name">
                          {type === "firstClass" ? "First" : type.charAt(0).toUpperCase() + type.slice(1)}
                        </span>
                        <span className="compact-price">${flight.prices[type]}</span>
                        <small className="text-muted d-block">{flight.seatsAvailable[type]} seats left</small>
                      </div>
                    </div>
                    <button
                      className="compact-select-btn btn btn-primary"
                      onClick={() => handleSelect(flight, type)}
                      disabled={flight.seatsAvailable[type] <= 0}
                    >
                      {flight.seatsAvailable[type] > 0 ? "Select" : "Sold Out"}
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
