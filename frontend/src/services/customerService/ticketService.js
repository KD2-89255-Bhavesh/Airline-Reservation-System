// src/services/ticketService.js

import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tickets'; // Change to your actual backend URL

// Fetch ticket by booking ID
export const getTicketByBookingId = async (bookingId) => {
  try {
    const response = await axios.get(`${API_URL}/${bookingId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching ticket:', error);
    throw error;
  }
};
