import React from 'react';
import HomeNavbar from '../../components/HomeNavbar';
import { FaPlane, FaCheckCircle, FaUser, FaTicketAlt, FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import '../../CSS/TicketPage.css';

const TicketPage = () => {
  // Sample ticket data - in a real app this would come from your state or API
  const ticketData = {
    bookingId: 'MXB20250722',
    flightNumber: 'MX101',
    airline: 'MX Airlines',
    source: 'New York (JFK)',
    destination: 'London (LHR)',
    departureDate: '2025-07-25',
    departureTime: '08:30',
    arrivalTime: '20:45',
    passengers: [
      { name: 'Mr John Doe', seat: '12A' },
      { name: 'Mrs Jane Doe', seat: '12B' }
    ],
    totalFare: 'INR 2006',
    bookingDate: '2025-07-22',
    paymentMethod: 'UPI Payment'
  };

  return (
    <div className="ticket-page">
      <HomeNavbar />
      
      <div className="ticket-container">
        <div className="ticket-header">
          <FaCheckCircle className="success-icon" />
          <h1>Booking Confirmed!</h1>
          <p>Your e-ticket has been generated successfully</p>
        </div>
        
        <div className="ticket-card">
          <div className="ticket-title">
            <FaTicketAlt className="ticket-icon" />
            <h2>E-Ticket</h2>
          </div>
          
          <div className="ticket-section">
            <div className="ticket-row">
              <span className="ticket-label">Booking ID:</span>
              <span className="ticket-value">{ticketData.bookingId}</span>
            </div>
            <div className="ticket-row">
              <span className="ticket-label">Booking Date:</span>
              <span className="ticket-value">
                {new Date(ticketData.bookingDate).toLocaleDateString('en-US', {
                  weekday: 'short',
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </span>
            </div>
          </div>
          
          <div className="divider"></div>
          
          <div className="ticket-section">
            <h3 className="section-title">
              <FaPlane className="section-icon" />
              Flight Details
            </h3>
            
            <div className="flight-info">
              <div className="flight-route">
                <div className="city-time">
                  <FaMapMarkerAlt className="city-icon" />
                  <div>
                    <span className="city">{ticketData.source}</span>
                    <span className="time">{ticketData.departureTime}</span>
                  </div>
                </div>
                
                <div className="flight-separator">
                  <div className="flight-line"></div>
                  <FaPlane className="plane-icon" />
                </div>
                
                <div className="city-time">
                  <FaMapMarkerAlt className="city-icon" />
                  <div>
                    <span className="city">{ticketData.destination}</span>
                    <span className="time">{ticketData.arrivalTime}</span>
                  </div>
                </div>
              </div>
              
              <div className="flight-details">
                <div className="detail-item">
                  <span>Flight Number:</span>
                  <span>{ticketData.flightNumber}</span>
                </div>
                <div className="detail-item">
                  <span>Airline:</span>
                  <span>{ticketData.airline}</span>
                </div>
                <div className="detail-item">
                  <span>Date:</span>
                  <span>
                    {new Date(ticketData.departureDate).toLocaleDateString('en-US', {
                      weekday: 'short',
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="divider"></div>
          
          <div className="ticket-section">
            <h3 className="section-title">
              <FaUser className="section-icon" />
              Passenger Details
            </h3>
            
            <div className="passengers-list">
              {ticketData.passengers.map((passenger, index) => (
                <div key={index} className="passenger-item">
                  <span className="passenger-number">Passenger {index + 1}</span>
                  <div className="passenger-details">
                    <span className="passenger-name">{passenger.name}</span>
                    <span className="passenger-seat">Seat: {passenger.seat}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="divider"></div>
          
          <div className="ticket-section">
            <h3 className="section-title">
              <FaCheckCircle className="section-icon" />
              Payment Details
            </h3>
            
            <div className="payment-details">
              <div className="payment-row">
                <span>Total Amount Paid:</span>
                <span>{ticketData.totalFare}</span>
              </div>
              <div className="payment-row">
                <span>Payment Method:</span>
                <span>{ticketData.paymentMethod}</span>
              </div>
              <div className="payment-row">
                <span>Payment Status:</span>
                <span className="status-success">Confirmed</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="ticket-actions">
          <button className="download-btn">Download Ticket</button>
          <button className="email-btn">Email Ticket</button>
        </div>
        
        <div className="ticket-footer">
          <p>Thank you for choosing MX Airlines. Have a pleasant journey!</p>
        </div>
      </div>
    </div>
  );
};

export default TicketPage;