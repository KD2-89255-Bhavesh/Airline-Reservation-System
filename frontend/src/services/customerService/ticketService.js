// src/services/ticketService.js

import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tickets'; // Change to your actual backend URL

/**
 * Get booking by ID from backend
 */
export const getBookingById = async (bookingId) => {
  try {
    console.log('Fetching booking with ID:', bookingId);
    
    const response = await axios.get(`${config.serverURL}/customer/bookings/${bookingId}`, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Failed to fetch booking details');
    }
  } catch (error) {
    console.error('Error fetching booking:', error);
    
    if (error.response) {
      const errorMessage = error.response.data?.message || 
                          error.response.data?.error || 
                          `Server error: ${error.response.status}`;
      throw new Error(errorMessage);
    } else if (error.request) {
      throw new Error('Network error. Please check your connection.');
    } else {
      throw new Error(error.message || 'Failed to fetch booking');
    }
  }
};

/**
 * Generate and download PDF ticket
 */
export const generateTicketPDF = async (bookingId) => {
  try {
    console.log('Requesting PDF for booking ID:', bookingId);
    
    const response = await axios.get(`${config.serverURL}/customer/bookings/${bookingId}/pdf`, {
      headers: {
        'Content-Type': 'application/json',
      },
      responseType: 'blob' // Important for PDF download
    });

    if (response.status === 200) {
      const contentType = response.headers['content-type'];
      if (!contentType || !contentType.includes('application/pdf')) {
        console.error('Invalid content type:', contentType);
        throw new Error('Invalid response format - expected PDF');
      }

      const blob = new Blob([response.data], { type: 'application/pdf' });
      
      if (blob.size === 0) {
        throw new Error('Empty PDF file received');
      }

      console.log('PDF generated successfully, size:', blob.size);
      return blob;
    } else {
      throw new Error('Failed to generate PDF');
    }
    
  } catch (error) {
    console.error('Error generating PDF:', error);
    
    if (error.response) {
      if (error.response.status === 404) {
        throw new Error('Booking not found');
      } else if (error.response.status === 401 || error.response.status === 403) {
        throw new Error('Not authorized to access this booking');
      } else if (error.response.status === 500) {
        throw new Error('Server error while generating PDF');
      } else {
        throw new Error(`Failed to generate PDF: ${error.response.status}`);
      }
    } else if (error.request) {
      throw new Error('Network error. Please check your connection.');
    } else {
      throw new Error(error.message || 'PDF generation failed');
    }
  }
};

/**
 * Send booking confirmation email
 */
export const sendBookingConfirmationEmail = async (bookingId) => {
  try {
    console.log('Sending confirmation email for booking ID:', bookingId);
    
    const response = await axios.post(`${config.serverURL}/customer/bookings/${bookingId}/send-email`, {}, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Failed to send confirmation email');
    }
    
  } catch (error) {
    console.error('Error sending email:', error);
    
    if (error.response) {
      const errorMessage = error.response.data?.message || 
                          error.response.data?.error || 
                          `Server error: ${error.response.status}`;
      throw new Error(errorMessage);
    } else if (error.request) {
      throw new Error('Network error. Please check your connection.');
    } else {
      throw new Error(error.message || 'Failed to send email');
    }
  }
};

/**
 * Static user configuration for development
 * Change this value if you need to test with different user IDs
 */
export const STATIC_USER_ID = 1;

/**
 * Get static user ID for development purposes
 * @returns {number} Static user ID
 */
export const getStaticUserId = () => {
  return STATIC_USER_ID;
};
