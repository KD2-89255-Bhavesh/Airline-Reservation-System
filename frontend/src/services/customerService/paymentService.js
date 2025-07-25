// src/services/paymentService.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/payments'; // Replace with your backend URL

// Simulate or send payment request to server
export const processPayment = async (paymentData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/process`, paymentData);
    return response.data;
  } catch (error) {
    console.error('Payment failed:', error);
    throw error;
  }
};
