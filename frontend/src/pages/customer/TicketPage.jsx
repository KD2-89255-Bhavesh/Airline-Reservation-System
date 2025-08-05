// src/pages/TicketPage.jsx

import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HomeNavbar from '../../components/HomeNavbar';
import {
  FaPlane, FaCheckCircle, FaUser, FaTicketAlt,
  FaMapMarkerAlt, FaRupeeSign, FaDownload, FaEnvelope,
  FaSpinner
} from 'react-icons/fa';
import { 
  getBookingById, 
  sendBookingConfirmationEmail, 
  generateTicketPDF 
} from '../../services/customerService/bookingService';
import '../../CSS/TicketPage.css';

const TicketPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingId = location.state?.bookingId || null;

  const [ticketData, setTicketData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [emailSending, setEmailSending] = useState(false);
  const [pdfGenerating, setPdfGenerating] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (!bookingId) {
      // Try to get booking confirmation from session storage as fallback
      const storedConfirmation = sessionStorage.getItem('bookingConfirmation');
      if (storedConfirmation) {
        try {
          const confirmation = JSON.parse(storedConfirmation);
          setTicketData(formatTicketData(confirmation));
          setLoading(false);
          return;
        } catch (error) {
          console.error('Error parsing stored confirmation:', error);
        }
      }
      
      setError('No booking ID found. Please try booking again.');
      setLoading(false);
      return;
    }

    const fetchTicket = async () => {
      try {
        setLoading(true);
        setError('');
        const data = await getBookingById(bookingId);
        setTicketData(formatTicketData(data));
      } catch (error) {
        console.error('Error fetching ticket:', error);
        setError('Failed to load ticket data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchTicket();
  }, [bookingId]);

  // Format the booking data to match the ticket display format
  const formatTicketData = (bookingData) => {
    return {
      bookingId: bookingData.bookingId || bookingData.id,
      bookingDate: bookingData.bookingDate || new Date().toISOString(),
      pnr: bookingData.pnr || bookingData.bookingReference,
      
      // Flight details
      flightNumber: bookingData.flightNumber || bookingData.flight?.flightNumber,
      airline: bookingData.airline || bookingData.flight?.airline,
      source: bookingData.source || bookingData.flight?.source,
      destination: bookingData.destination || bookingData.flight?.destination,
      departureDate: bookingData.departureDate || bookingData.flight?.departureDate,
      departureTime: bookingData.departureTime || bookingData.flight?.departureTime,
      arrivalDate: bookingData.arrivalDate || bookingData.flight?.arrivalDate,
      arrivalTime: bookingData.arrivalTime || bookingData.flight?.arrivalTime,
      
      // Passenger details
      passengers: bookingData.passengers || [],
      
      // Payment details
      totalFare: bookingData.totalFare || bookingData.totalAmount,
      paymentMethod: bookingData.paymentMethod || 'Card',
      paymentStatus: bookingData.paymentStatus || 'Confirmed',
      
      // Additional details
      classType: bookingData.classType,
      bookingStatus: bookingData.bookingStatus || 'CONFIRMED'
    };
  };

  const handleDownloadTicket = async () => {
    if (!ticketData?.bookingId) {
      setError('Booking ID not available for PDF generation');
      return;
    }

    try {
      setPdfGenerating(true);
      setError('');
      
      const pdfBlob = await generateTicketPDF(ticketData.bookingId);
      
      // Create download link
      const url = window.URL.createObjectURL(pdfBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `ticket-${ticketData.bookingId}.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
      
      setSuccessMessage('Ticket downloaded successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      console.error('Error downloading ticket:', error);
      setError('Failed to download ticket. Please try again.');
    } finally {
      setPdfGenerating(false);
    }
  };

  const handleEmailTicket = async () => {
    if (!ticketData?.bookingId) {
      setError('Booking ID not available for email');
      return;
    }

    try {
      setEmailSending(true);
      setError('');
      
      await sendBookingConfirmationEmail(ticketData.bookingId);
      
      setSuccessMessage('Ticket sent to your email successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      setError('Failed to send email. Please try again.');
    } finally {
      setEmailSending(false);
    }
  };

  const handleBackToHome = () => {
    // Clear any remaining session data
    sessionStorage.removeItem('bookingConfirmation');
    navigate('/customer/dashboard');
  };

  if (loading) {
    return (
      <div className="ticket-page">
        <HomeNavbar />
        <div className="ticket-container">
          <div className="loading-spinner">
            <FaSpinner className="spinner-icon" />
            <p>Loading your ticket...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error && !ticketData) {
    return (
      <div className="ticket-page">
        <HomeNavbar />
        <div className="ticket-container">
          <div className="error-container">
            <h2>Unable to Load Ticket</h2>
            <p>{error}</p>
            <button className="back-button" onClick={handleBackToHome}>
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="ticket-page">
      <HomeNavbar />
      <div className="ticket-container">
        <div className="ticket-header">
          <FaCheckCircle className="success-icon" />
          <h1>Booking Confirmed!</h1>
          <p>Your e-ticket has been generated and saved successfully</p>
        </div>

        {error && <div className="error-message">{error}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}

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
            {ticketData.pnr && (
              <div className="ticket-row">
                <span className="ticket-label">PNR:</span>
                <span className="ticket-value">{ticketData.pnr}</span>
              </div>
            )}
            <div className="ticket-row">
              <span className="ticket-label">Booking Date:</span>
              <span className="ticket-value">
                {new Date(ticketData.bookingDate).toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
          </div>

          <div className="divider"></div>

          {/* Flight Info */}
          <div className="ticket-section">
            <h3 className="section-title">
              <FaPlane className="section-icon" /> Flight Details
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
                  <span>{ticketData.departureDate}</span>
                </div>
                {ticketData.classType && (
                  <div className="detail-item">
                    <span>Class:</span>
                    <span>{ticketData.classType.charAt(0).toUpperCase() + ticketData.classType.slice(1)}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="divider"></div>

          {/* Passenger Info */}
          <div className="ticket-section">
            <h3 className="section-title">
              <FaUser className="section-icon" /> Passenger Details
            </h3>
            <div className="passengers-list">
              {ticketData.passengers && ticketData.passengers.length > 0 ? (
                ticketData.passengers.map((passenger, index) => (
                  <div key={index} className="passenger-item">
                    <span className="passenger-number">Passenger {index + 1}</span>
                    <div className="passenger-details">
                      <span className="passenger-name">{passenger.name}</span>
                      {passenger.seatNumber && (
                        <span className="passenger-seat">Seat: {passenger.seatNumber}</span>
                      )}
                      {passenger.age && (
                        <span className="passenger-age">Age: {passenger.age}</span>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="passenger-item">
                  <span className="passenger-name">Passenger information will be updated shortly</span>
                </div>
              )}
            </div>
          </div>

          <div className="divider"></div>

          {/* Payment Info */}
          <div className="ticket-section">
            <h3 className="section-title">
              <FaRupeeSign className="section-icon" /> Payment Details
            </h3>
            <div className="payment-details">
              <div className="payment-row">
                <span>Total Paid:</span>
                <span>₹{ticketData.totalFare?.toLocaleString() || '0'}</span>
              </div>
              <div className="payment-row">
                <span>Method:</span>
                <span>{ticketData.paymentMethod}</span>
              </div>
              <div className="payment-row">
                <span>Status:</span>
                <span className="status-success">
                  {ticketData.paymentStatus || 'Confirmed'}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="ticket-actions">
          <button 
            className="download-btn" 
            onClick={handleDownloadTicket}
            disabled={pdfGenerating}
          >
            {pdfGenerating ? (
              <>
                <FaSpinner className="spinner-icon" />
                Generating PDF...
              </>
            ) : (
              <>
                <FaDownload />
                Download Ticket
              </>
            )}
          </button>
          <button 
            className="email-btn" 
            onClick={handleEmailTicket}
            disabled={emailSending}
          >
            {emailSending ? (
              <>
                <FaSpinner className="spinner-icon" />
                Sending...
              </>
            ) : (
              <>
                <FaEnvelope />
                Email Ticket
              </>
            )}
          </button>
        </div>

        <div className="ticket-footer">
          <p>Thank you for choosing MX Airlines. Have a pleasant journey!</p>
          <button className="back-home-btn" onClick={handleBackToHome}>
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketPage;