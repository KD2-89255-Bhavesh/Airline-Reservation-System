import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaCreditCard, FaLock, FaCheckCircle, FaRupeeSign } from 'react-icons/fa';
import { processPayment } from '../../services/customerService/bookingService';
import '../../CSS/Payment.css';

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [bookingData, setBookingData] = useState(null);
  const [passengers, setPassengers] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
    cardholderName: ''
  });
  const [upiId, setUpiId] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    try {
      let flightData = null;
      let passengerData = null;
      let calculatedTotal = 0;

      if (location.state?.bookingDetails) {
        const { bookingDetails } = location.state;
        flightData = bookingDetails.flightData || bookingDetails;
        passengerData = bookingDetails.passengers;
        calculatedTotal = location.state.totalPrice || 0;
      } else {
        const storedFlightData = sessionStorage.getItem('flightBookingData');
        const storedPassengers = sessionStorage.getItem('flightBooking_passengers');
        const storedFinalBooking = sessionStorage.getItem('finalBookingData');

        if (storedFinalBooking) {
          const finalBooking = JSON.parse(storedFinalBooking);
          flightData = {
            flight: finalBooking.flight,
            classType: finalBooking.classType,
            selectedPrice: finalBooking.selectedPrice,
            searchParams: finalBooking.searchParams
          };
          passengerData = finalBooking.passengers;
          calculatedTotal = finalBooking.totalPrice;
        } else if (storedFlightData && storedPassengers) {
          flightData = JSON.parse(storedFlightData);
          passengerData = JSON.parse(storedPassengers);
          calculatedTotal = passengerData.length * flightData.selectedPrice;
        }
      }

      if (!flightData || !passengerData || passengerData.length === 0) {
        console.error('Missing booking data');
        navigate('/customer/flightlist');
        return;
      }

      setBookingData(flightData);
      setPassengers(passengerData);
      setTotalPrice(calculatedTotal);
    } catch (error) {
      console.error('Error loading booking data:', error);
      navigate('/customer/flightlist');
    }
  }, [navigate, location.state]);

  const validateCardNumber = (number) => /^\d{13,19}$/.test(number.replace(/\s/g, ''));
  const validateCVV = (cvv) => /^\d{3,4}$/.test(cvv);
  const validateUPI = (upiId) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$/.test(upiId);

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const match = v.match(/\d{4,16}/g);
    const parts = [];
    const matched = match && match[0] || '';
    for (let i = 0; i < matched.length; i += 4) parts.push(matched.substring(i, i + 4));
    return parts.join(' ');
  };

  const handleCardInputChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === 'cardNumber') {
      formattedValue = formatCardNumber(value);
      if (formattedValue.length > 19) return;
    } else if (name === 'cvv') {
      formattedValue = value.replace(/\D/g, '');
      if (formattedValue.length > 4) return;
    } else if (name === 'cardholderName') {
      formattedValue = value.replace(/[^a-zA-Z\s]/g, '');
    }

    setCardDetails((prev) => ({ ...prev, [name]: formattedValue }));

    if (validationErrors[name]) {
      setValidationErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleUpiChange = (e) => {
    const value = e.target.value.toLowerCase();
    setUpiId(value);

    if (validationErrors.upiId) {
      setValidationErrors((prev) => ({ ...prev, upiId: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};

    if (paymentMethod === 'card') {
      if (!cardDetails.cardholderName.trim()) {
        errors.cardholderName = 'Cardholder name is required';
      }
      if (!cardDetails.cardNumber.trim()) {
        errors.cardNumber = 'Card number is required';
      } else if (!validateCardNumber(cardDetails.cardNumber)) {
        errors.cardNumber = 'Invalid card number';
      }
      if (!cardDetails.expiryMonth) errors.expiryMonth = 'Expiry month is required';
      if (!cardDetails.expiryYear) errors.expiryYear = 'Expiry year is required';
      if (cardDetails.expiryMonth && cardDetails.expiryYear) {
        const currentDate = new Date();
        const cardExpiry = new Date(cardDetails.expiryYear, cardDetails.expiryMonth - 1);
        if (cardExpiry < currentDate) errors.expiryMonth = 'Card has expired';
      }
      if (!cardDetails.cvv.trim()) {
        errors.cvv = 'CVV is required';
      } else if (!validateCVV(cardDetails.cvv)) {
        errors.cvv = 'Invalid CVV';
      }
    } else if (paymentMethod === 'upi') {
      if (!upiId.trim()) errors.upiId = 'UPI ID is required';
      else if (!validateUPI(upiId)) errors.upiId = 'Invalid UPI ID';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const generateTransactionId = () => `TXN${Date.now()}${Math.floor(Math.random() * 10000)}`;
  const handleBack = () => navigate(-1);

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!validateForm()) return;
    setIsProcessing(true);

    try {
      const paymentData = {
        bookingDetails: {
          flight: bookingData.flight || bookingData,
          classType: bookingData.classType,
          passengers,
          totalPrice,
          searchParams: bookingData.searchParams || {}
        },
        paymentInfo: {
          method: paymentMethod,
          transactionId: generateTransactionId(),
          amount: totalPrice,
          details: paymentMethod === 'card'
            ? {
                cardNumber: '****' + cardDetails.cardNumber.replace(/\s/g, '').slice(-4),
                cardholderName: cardDetails.cardholderName
              }
            : {
                upiId: upiId
              }
        }
      };

      const bookingConfirmation = await processPayment(paymentData);
      sessionStorage.setItem('bookingConfirmation', JSON.stringify(bookingConfirmation));
      sessionStorage.removeItem('flightBookingData');
      sessionStorage.removeItem('flightBooking_passengers');
      sessionStorage.removeItem('finalBookingData');

      setIsSuccess(true);
      setTimeout(() => {
        navigate('/customer/ticketpage', {
          state: {
            bookingId: bookingConfirmation.bookingId,
            fromPayment: true
          }
        });
      }, 2000);
    } catch (err) {
      console.error('Payment error:', err);
      setError(err.message || 'Payment failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  if (!bookingData || !passengers.length) {
    return (
      <div className="payment-page">
        <div className="payment-container">
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading payment details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="payment-page">
        <div className="payment-success">
          <FaCheckCircle className="success-icon" />
          <h2>Payment Successful!</h2>
          <p>Your booking has been confirmed. Redirecting to ticket...</p>
          <div className="booking-summary">
            <p><strong>Amount Paid:</strong> ₹{totalPrice.toLocaleString()}</p>
            <p><strong>Passengers:</strong> {passengers.length}</p>
            <p><strong>Flight:</strong> {bookingData.flight.flightNumber}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="payment-page">
      <div className="payment-container">
        <h1>PAYMENT</h1>
        {error && <div className="error-message">{error}</div>}

        <div className="payment-methods">
          <div className={`method-tab ${paymentMethod === 'card' ? 'active' : ''}`} onClick={() => setPaymentMethod('card')}>
            <FaCreditCard className="method-icon" />
            <span>Card</span>
          </div>
          <div className={`method-tab ${paymentMethod === 'upi' ? 'active' : ''}`} onClick={() => setPaymentMethod('upi')}>
            <FaRupeeSign className="method-icon" />
            <span>UPI</span>
          </div>
        </div>

        <div className="divider" />
        <div className="total-fare-box">
          <span>Total Fare:</span>
          <span>₹{totalPrice.toLocaleString()}</span>
        </div>

        {paymentMethod === 'card' ? (
          <form onSubmit={handlePaymentSubmit} className="payment-form">
            {/* Card Form UI */}
            <div className="form-group">
              <label>Cardholder Name*</label>
              <input
                type="text"
                name="cardholderName"
                value={cardDetails.cardholderName}
                onChange={handleCardInputChange}
                className={validationErrors.cardholderName ? 'error' : ''}
                required
              />
              {validationErrors.cardholderName && <span className="error-text">{validationErrors.cardholderName}</span>}
            </div>

            <div className="form-group">
              <label>Card Number*</label>
              <input
                type="text"
                name="cardNumber"
                value={cardDetails.cardNumber}
                onChange={handleCardInputChange}
                maxLength="19"
                className={validationErrors.cardNumber ? 'error' : ''}
                required
              />
              {validationErrors.cardNumber && <span className="error-text">{validationErrors.cardNumber}</span>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Expiry Month*</label>
                <select name="expiryMonth" value={cardDetails.expiryMonth} onChange={handleCardInputChange} required>
                  <option value="">MM</option>
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i + 1} value={String(i + 1).padStart(2, '0')}>
                      {String(i + 1).padStart(2, '0')}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Expiry Year*</label>
                <select name="expiryYear" value={cardDetails.expiryYear} onChange={handleCardInputChange} required>
                  <option value="">YYYY</option>
                  {Array.from({ length: 10 }, (_, i) => {
                    const year = new Date().getFullYear() + i;
                    return <option key={year} value={year}>{year}</option>;
                  })}
                </select>
              </div>

              <div className="form-group">
                <label>CVV*</label>
                <input
                  type="password"
                  name="cvv"
                  value={cardDetails.cvv}
                  onChange={handleCardInputChange}
                  maxLength="4"
                  className={validationErrors.cvv ? 'error' : ''}
                  required
                />
                {validationErrors.cvv && <span className="error-text">{validationErrors.cvv}</span>}
              </div>
            </div>

            <div className="security-note">
              <FaLock className="lock-icon" />
              <span>Secured Payment</span>
            </div>

            <button type="submit" className="pay-button" disabled={isProcessing}>
              {isProcessing ? 'Processing...' : `Pay ₹${totalPrice.toLocaleString()}`}
            </button>
          </form>
        ) : (
          <form onSubmit={handlePaymentSubmit} className="payment-form">
            {/* UPI Form UI */}
            <div className="form-group">
              <label>UPI ID*</label>
              <input
                type="text"
                value={upiId}
                onChange={handleUpiChange}
                className={validationErrors.upiId ? 'error' : ''}
                required
              />
              <p className="upi-example">e.g. username@paytm</p>
              {validationErrors.upiId && <span className="error-text">{validationErrors.upiId}</span>}
            </div>

            <div className="security-note">
              <FaLock className="lock-icon" />
              <span>Secured Payment</span>
            </div>

            <button type="submit" className="pay-button" disabled={isProcessing}>
              {isProcessing ? 'Processing...' : `Pay ₹${totalPrice.toLocaleString()}`}
            </button>
          </form>
        )}

        <button type="button" className="back-button" onClick={handleBack}>
          Back to Preview
        </button>
      </div>
    </div>
  );
};

export default Payment;
