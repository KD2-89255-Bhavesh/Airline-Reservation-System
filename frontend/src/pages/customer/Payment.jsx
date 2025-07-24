import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCreditCard, FaLock, FaCheckCircle, FaRupeeSign } from 'react-icons/fa';
import '../../CSS/Payment.css';

const Payment= () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: ''
  });
  const [upiId, setUpiId] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCardInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUpiChange = (e) => {
    setUpiId(e.target.value);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      setTimeout(() => {
        navigate('/Ticketpage');
      }, 2000);
    }, 3000);
  };

  const handleBack = () => {
    navigate(-1);
  };

  if (isSuccess) {
    return (
      <div className="payment-page">
  
        <div className="payment-success">
          <FaCheckCircle className="success-icon" />
          <h2>Payment Successful!</h2>
          <p>Your booking has been confirmed. Redirecting to confirmation page...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="payment-page">

      
      <div className="payment-container">
        <h1>PAYMENT</h1>
        
        <div className="payment-methods">
          <div 
            className={`method-tab ${paymentMethod === 'card' ? 'active' : ''}`}
            onClick={() => setPaymentMethod('card')}
          >
            <FaCreditCard className="method-icon" />
            <span>Credit/Debit Card Payment</span>
          </div>
          <div 
            className={`method-tab ${paymentMethod === 'upi' ? 'active' : ''}`}
            onClick={() => setPaymentMethod('upi')}
          >
            <FaRupeeSign className="method-icon" />
            <span>UPI Payment</span>
          </div>
        </div>
        
        <div className="divider"></div>
        
        <div className="total-fare-box">
          <span>Total Fare:</span>
          <span>INR 2006</span>
        </div>

        {paymentMethod === 'card' ? (
          <form onSubmit={handlePaymentSubmit} className="payment-form">
            <h3>Credit/Debit Card Payment</h3>
            
            <div className="form-group">
              <label>Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={cardDetails.cardNumber}
                onChange={handleCardInputChange}
                placeholder="Enter card number"
                maxLength="16"
                required
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Expiry Month</label>
                <select
                  name="expiryMonth"
                  value={cardDetails.expiryMonth}
                  onChange={handleCardInputChange}
                  required
                >
                  <option value="">MM</option>
                  {Array.from({length: 12}, (_, i) => (
                    <option key={i+1} value={String(i+1).padStart(2, '0')}>
                      {String(i+1).padStart(2, '0')}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label>Expiry Year</label>
                <select
                  name="expiryYear"
                  value={cardDetails.expiryYear}
                  onChange={handleCardInputChange}
                  required
                >
                  <option value="">YYYY</option>
                  {Array.from({length: 10}, (_, i) => {
                    const year = new Date().getFullYear() + i;
                    return (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    );
                  })}
                </select>
              </div>
              
              <div className="form-group">
                <label>CVV</label>
                <input
                  type="text"
                  name="cvv"
                  value={cardDetails.cvv}
                  onChange={handleCardInputChange}
                  placeholder="CVV"
                  maxLength="3"
                  required
                />
              </div>
            </div>
            
            <button type="submit" className="pay-button" disabled={isProcessing}>
              {isProcessing ? 'Processing...' : 'Pay with Card'}
            </button>
          </form>
        ) : (
          <form onSubmit={handlePaymentSubmit} className="payment-form">
            <h3>UPI Payment</h3>
            
            <div className="form-group">
              <label>Enter UPI ID</label>
              <input
                type="text"
                value={upiId}
                onChange={handleUpiChange}
                placeholder="username@bank"
                required
              />
              <p className="upi-example">Example: username@bank</p>
            </div>
            
            <button type="submit" className="pay-button" disabled={isProcessing}>
              {isProcessing ? 'Processing...' : 'Pay with UPI'}
            </button>
          </form>
        )}
        
        <button 
        type="button" className="back-button" onClick={handleBack}>
          Back
        </button>
      </div>
    </div>
  );
};

export default Payment;