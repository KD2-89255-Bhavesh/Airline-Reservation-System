import axios from 'axios';
import { config } from '../../../config';

// Generate unique transaction ID
export const generateTransactionId = () => {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 10000);
  return `TXN${timestamp}${random}`;
};

/**
 * Process booking payment and submit booking details to backend.
 * Updated to use flightNumber instead of flight.id
 * 
 * @param {Object} paymentData
 * @returns {Promise<Object>} Booking confirmation
 */
export const processPayment = async (paymentData) => {
  try {
    if (!paymentData.bookingDetails || !paymentData.paymentInfo) {
      throw new Error('Missing booking or payment data.');
    }

    // Static user ID for development (no authentication)
    const userId = 2;

    const {
      flight,
      classType,
      passengers,
      totalPrice,
      searchParams,
      specialRequests,
      notes
    } = paymentData.bookingDetails;

    const {
      method,
      transactionId,
      amount,
      details
    } = paymentData.paymentInfo;

    // Validate required flight data - now using flightNumber instead of id
    if (!flight || !flight.flightNumber) {
      throw new Error('Flight number is required but missing.');
    }

    console.log('Processing payment for flight:', flight.flightNumber);

    // Format dates and times properly
    const formatDate = (dateStr) => {
      if (!dateStr) return null;
      const date = new Date(dateStr);
      return date.toISOString().split('T')[0]; // YYYY-MM-DD format
    };

    const formatTime = (timeStr) => {
      if (!timeStr) return null;
      // Ensure time is in HH:MM:SS format
      if (timeStr.length === 5) { // HH:MM
        return `${timeStr}:00`;
      }
      return timeStr;
    };

    // Compose request body matching your DTO structure
    const bookingPayload = {
      // Required fields
      userId: userId,
      // Use flightNumber as primary identifier (no flightId needed)
      // flightId: null,
      flightNumber: flight.flightNumber,
      airline: flight.airline,
      source: flight.source,
      destination: flight.destination,
      departureDate: formatDate(flight.departureDate),
      departureTime: formatTime(flight.departureTime),
      arrivalDate: formatDate(flight.arrivalDate),
      arrivalTime: formatTime(flight.arrivalTime),

      // Booking details
      classType: classType.toUpperCase(), // Ensure enum format
      totalFare: parseFloat(totalPrice),
      totalPassengers: passengers.length,

      // Payment information
      paymentMethod: method.toUpperCase(), // e.g., 'CARD', 'UPI', 'NET_BANKING'
      paymentStatus: 'COMPLETED',
      transactionId: transactionId || generateTransactionId(),

      // Booking status
      bookingStatus: 'CONFIRMED',

      // Optional fields
      searchParams: typeof searchParams === 'object' ? JSON.stringify(searchParams) : searchParams,
      specialRequests: specialRequests || '',
      notes: notes || '',

      // Passengers array
      passengers: passengers.map((passenger, index) => ({
        name: passenger.name || '',
        age: parseInt(passenger.age) || 0,
        gender: (passenger.gender || 'OTHER').toUpperCase(),
        seatNumber: passenger.seatNumber || `${classType.charAt(0).toUpperCase()}${index + 1}`,
        passportNumber: passenger.passportNumber || '',
        specialRequests: passenger.specialRequests || '',
        mealPreference: (passenger.mealPreference || 'NONE').toUpperCase()
      }))
    };

    // Log the payload for debugging (remove in production)
    console.log('Booking Payload:', JSON.stringify(bookingPayload, null, 2));

    // Submit booking to backend
    const response = await axios.post(`${config.serverURL}/customer/bookings`, bookingPayload, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (response.status === 201 || response.status === 200) {
      return {
        success: true,
        booking: response.data,
        bookingId: response.data.id || response.data.bookingId, // Fallback for different response structures
        message: 'Booking confirmed successfully!'
      };
    } else {
      throw new Error('Unexpected response from server');
    }

  } catch (error) {
    console.error('Error processing payment:', error);
    
    // Handle different types of errors
    if (error.response) {
      // Server responded with error status
      const errorMessage = error.response.data?.message || 
                          error.response.data?.error || 
                          `Server error: ${error.response.status}`;
      throw new Error(errorMessage);
    } else if (error.request) {
      // Request was made but no response received
      throw new Error('Network error. Please check your connection and try again.');
    } else {
      // Something else happened
      throw new Error(error.message || 'Payment failed. Please try again.');
    }
  }
};

