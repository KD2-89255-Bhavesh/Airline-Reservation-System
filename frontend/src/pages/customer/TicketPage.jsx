// src/pages/TicketPage.jsx

import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HomeNavbar from '../../components/HomeNavbar';
import {
  FaPlane, FaCheckCircle, FaUser, FaTicketAlt,
  FaMapMarkerAlt, FaRupeeSign
} from 'react-icons/fa';
import { getTicketByBookingId } from '../../services/customerService/ticketService';
import '../../CSS/TicketPage.css';

const TicketPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingId = location.state?.bookingId || null;

  const [ticketData, setTicketData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!bookingId) {
      alert('No booking ID found. Redirecting...');
      navigate('/');
      return;
    }

    const fetchTicket = async () => {
      try {
        const data = await getTicketByBookingId(bookingId);
        setTicketData(data);
      } catch (error) {
        alert('Failed to load ticket data.');
      } finally {
        setLoading(false);
      }
    };

    fetchTicket();
  }, [bookingId, navigate]);

  if (loading) {
    return <div className="ticket-page"><p>Loading ticket...</p></div>;
  }

  if (!ticketData) {
    return <div className="ticket-page"><p>Ticket not found.</p></div>;
  }

  return (
    <div className="ticket-page">
      <div className="ticket-container">
        <div className="ticket-header">
          <FaCheckCircle className="success-icon" />
          <h1>Booking Confirmed!</h1>
          <p>Your e-ticket has been generated successfully</p>
        </div>

        <div className="ticket-card">
          {/* Ticket Info */}
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
              <span className="ticket-value">{new Date(ticketData.bookingDate).toLocaleDateString()}</span>
            </div>
          </div>

          <div className="divider"></div>

          {/* Flight Info */}
          <div className="ticket-section">
            <h3 className="section-title"><FaPlane className="section-icon" /> Flight Details</h3>
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
                <div className="detail-item"><span>Flight Number:</span><span>{ticketData.flightNumber}</span></div>
                <div className="detail-item"><span>Airline:</span><span>{ticketData.airline}</span></div>
                <div className="detail-item"><span>Date:</span><span>{ticketData.departureDate}</span></div>
              </div>
            </div>
          </div>

          <div className="divider"></div>

          {/* Passenger Info */}
          <div className="ticket-section">
            <h3 className="section-title"><FaUser className="section-icon" /> Passenger Details</h3>
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

          {/* Payment Info */}
          <div className="ticket-section">
            <h3 className="section-title"><FaRupeeSign className="section-icon" /> Payment Details</h3>
            <div className="payment-details">
              <div className="payment-row"><span>Total Paid:</span><span>{ticketData.totalFare}</span></div>
              <div className="payment-row"><span>Method:</span><span>{ticketData.paymentMethod}</span></div>
              <div className="payment-row"><span>Status:</span><span className="status-success">Confirmed</span></div>
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
