import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/flights'; // Adjust if needed

// 1. Search flights based on source, destination, and date
export const searchFlights = async (from, to, departureDate) => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        from,
        to,
        date: departureDate,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error searching flights:', error);
    throw error;
  }
};

// 2. Get flight details by flight number (optional usage)
export const getFlightDetails = async (flightNumber) => {
  try {
    const response = await axios.get(`${BASE_URL}/${flightNumber}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching flight ${flightNumber}:`, error);
    throw error;
  }
};

// 3. Book flight (if needed in next component)
export const bookFlight = async (bookingData) => {
  try {
    const response = await axios.post(`${BASE_URL}/book`, bookingData);
    return response.data;
  } catch (error) {
    console.error('Error booking flight:', error);
    throw error;
  }
};

export const submitPassengerDetails = async (flightNumber, classType, passengers) => {
  try {
    const response = await axios.post(`http://localhost:8080/api/bookings`, {
      flightNumber,
      classType,
      passengers,
    });
    return response.data;
  } catch (error) {
    console.error('Error submitting passenger details:', error);
    throw error;
  }
};