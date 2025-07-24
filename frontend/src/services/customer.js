import axios from 'axios';
//import { config } from '../config';

// Search flights with parameters
export async function searchFlights(departure, destination, date) {
  try {
    const response = await axios.get(`${config.apiBaseUrl}/flights/search`, {
      params: {
        origin: departure,
        destination,
        departureDate: date
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch flights');
  }
}

// Get default flights (for when page is refreshed)
export async function getDefaultFlights() {
  try {
    const response = await axios.get(`${config.apiBaseUrl}/flights`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to load default flights');
  }
}

// Get specific flight details
export async function getFlightDetails(flightId) {
  try {
    const response = await axios.get(`${config.apiBaseUrl}/flights/${flightId}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch flight details');
  }
}