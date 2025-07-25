// src/services/bookingService.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/bookings'; // adjust base URL

// Save booking preview data
export const saveBookingPreview = async (bookingData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/preview`, bookingData);
    return response.data;
  } catch (error) {
    console.error("Error saving booking preview", error);
    throw error;
  }
};

// Fetch booking details (optional, if you store/retrieve from server)
export const getBookingById = async (bookingId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${bookingId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching booking details", error);
    throw error;
  }
};
