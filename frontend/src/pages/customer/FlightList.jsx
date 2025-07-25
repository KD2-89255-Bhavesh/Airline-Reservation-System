import React from 'react';
import { FaPlane, FaClock, FaChair } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../../CSS/FlightList.css';
import "bootstrap/dist/css/bootstrap.min.css";

const FlightList = () => {
  const navigate = useNavigate();

  // Dummy data for two flights
  const dummyFlights = [
    {
      flightNumber: "MX101",
      airline: "MX Airlines",
      source: "New York (JFK)",
      destination: "London (LHR)",
      departureTime: "08:30",
      arrivalTime: "20:45",
      duration: "7h 15m",
      prices: {
        economy: 450,
        business: 1200,
        firstClass: 2500
      },
      seatsAvailable: {
        economy: 24,
        business: 8,
        firstClass: 2
      }
    },
    {
      flightNumber: "MX202",
      airline: "MX Airlines",
      source: "London (LHR)",
      destination: "New York (JFK)",
      departureTime: "10:15",
      arrivalTime: "13:30",
      duration: "7h 15m",
      prices: {
        economy: 475,
        business: 1250,
        firstClass: 2600
      },
      seatsAvailable: {
        economy: 12,
        business: 5,
        firstClass: 1
      }
    }
  ];

  const handleSelect = (flightNumber, classType) => {
    const selectedFlight = dummyFlights.find(flight => flight.flightNumber === flightNumber);
    
    if (!selectedFlight) {
      console.error('Flight not found');
      return;
    }

    navigate('/passengerdetails', {
      state: {
        flightInfo: {
          flightNumber: selectedFlight.flightNumber,
          airline: selectedFlight.airline,
          route: `${selectedFlight.source} to ${selectedFlight.destination}`,
          departureTime: selectedFlight.departureTime,
          arrivalTime: selectedFlight.arrivalTime,
          duration: selectedFlight.duration,
          classType: classType,
          price: selectedFlight.prices[classType.toLowerCase()],
          seatsAvailable: selectedFlight.seatsAvailable[classType.toLowerCase()]
        },
        passengerCount: 1 // Default value, can be dynamic
      }
    });
  };

  return (
    <div className="compact-flight-list container mt-4">
      <h2 className="mb-4">Available Flights ({dummyFlights.length})</h2>
      
      <div className="compact-flights-container">
        {dummyFlights.map((flight, index) => (
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
              <div className="compact-class-option">
                <div className="compact-class-info">
                  <FaChair className="compact-class-icon economy" />
                  <div>
                    <span className="compact-class-name">Economy</span>
                    <span className="compact-price">${flight.prices.economy}</span>
                    <small className="text-muted d-block">{flight.seatsAvailable.economy} seats left</small>
                  </div>
                </div>
                <button 
                  className="compact-select-btn btn btn-primary"
                  onClick={() => handleSelect(flight.flightNumber, 'economy')}
                  disabled={flight.seatsAvailable.economy <= 0}
                >
                  {flight.seatsAvailable.economy > 0 ? 'Select' : 'Sold Out'}
                </button>
              </div>
              
              <div className="compact-class-option">
                <div className="compact-class-info">
                  <FaChair className="compact-class-icon business" />
                  <div>
                    <span className="compact-class-name">Business</span>
                    <span className="compact-price">${flight.prices.business}</span>
                    <small className="text-muted d-block">{flight.seatsAvailable.business} seats left</small>
                  </div>
                </div>
                <button 
                  className="compact-select-btn btn btn-primary"
                  onClick={() => handleSelect(flight.flightNumber, 'business')}
                  disabled={flight.seatsAvailable.business <= 0}
                >
                  {flight.seatsAvailable.business > 0 ? 'Select' : 'Sold Out'}
                </button>
              </div>
              
              <div className="compact-class-option">
                <div className="compact-class-info">
                  <FaChair className="compact-class-icon first-class" />
                  <div>
                    <span className="compact-class-name">First</span>
                    <span className="compact-price">${flight.prices.firstClass}</span>
                    <small className="text-muted d-block">{flight.seatsAvailable.firstClass} seats left</small>
                  </div>
                </div>
                <button 
                  className="compact-select-btn btn btn-primary"
                  onClick={() => handleSelect(flight.flightNumber, 'firstClass')}
                  disabled={flight.seatsAvailable.firstClass <= 0}
                >
                  {flight.seatsAvailable.firstClass > 0 ? 'Select' : 'Sold Out'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightList;