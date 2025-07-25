// src/pages/BookingPreview.jsx

import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import HomeNavbar from '../../components/HomeNavbar';
import { FaPlane, FaClock, FaUserFriends, FaMoneyBillWave } from 'react-icons/fa';
import '../../CSS/BookingPreview.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { saveBookingPreview } from '../../services/customerService/bookingService';

const BookingPreview = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [bookingDetails, setBookingDetails] = useState(location.state || null);

  useEffect(() => {
    if (!bookingDetails) {
      // fallback if no state passed
      navigate('/');
    }
  }, [bookingDetails, navigate]);

  const handleProceed = async () => {
    try {
      const result = await saveBookingPreview(bookingDetails);
      console.log("Saved successfully:", result);
      navigate('/payment', { state: { bookingId: result.id } });
    } catch (error) {
      alert("Failed to save booking. Try again.");
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  if (!bookingDetails) return null; // Loading fallback or redirect

  return (
    <div className="booking-preview-page">
      <div className="booking-preview-container">
        <h2>Booking Preview</h2>
        <p className="subtitle">Please review your booking details before proceeding</p>

        {/* Flight and Passenger Details (same as your code) */}
        {/* ...keep the rest of the JSX unchanged... */}

        <div className="action-buttons">
          <button className="back-button" onClick={handleBack}>
            Back
          </button>
          <button className="proceed-button" onClick={handleProceed}>
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingPreview;
