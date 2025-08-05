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
 * 
 * @param {Object} paymentData
 * @returns {Promise<Object>} Booking confirmation
 */
export const processPayment = async (paymentData) => {
  try {
    if (!paymentData.bookingDetails || !paymentData.paymentInfo) {
      throw new Error('Missing booking or payment data.');
    }

    const {
      flight,
      classType,
      passengers,
      totalPrice,
      searchParams
    } = paymentData.bookingDetails;

    const {
      method,
      transactionId,
      amount,
      details
    } = paymentData.paymentInfo;

    // Compose request body
    const bookingPayload = {
      flightId: flight.id,
      flightNumber: flight.flightNumber,
      airline: flight.airline,
      source: flight.source,
      destination: flight.destination,
      departureDate: flight.departureDate,
      departureTime: flight.departureTime,
      arrivalDate: flight.arrivalDate,
      arrivalTime: flight.arrivalTime,

      classType,
      totalFare: totalPrice,
      totalPassengers: passengers.length,
      searchParams: searchParams || {},
      bookingDate: new Date().toISOString(),
      bookingStatus: 'CONFIRMED',
      paymentMethod: method,
      paymentStatus: 'COMPLETED',
      transactionId: transactionId || generateTransactionId(),

      passengers: passengers.map((p, i) => ({
        name: p.name,
        age: p.age,
        gender: p.gender,
        seatNumber: p.seatNumber || `${classType.charAt(0)}${i + 1}`,
        passportNumber: p.passportNumber || '',
        specialRequests: p.specialRequests || ''
      }))
    };

    const response = await axios.post(`${config.serverURL}/customer/bookings`, bookingPayload);
    return response.data;

  } catch (error) {
    console.error('Error processing payment:', error);
    throw new Error(error?.response?.data?.message || 'Payment failed. Please try again.');
  }
};
