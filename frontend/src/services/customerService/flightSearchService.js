import axios from 'axios';
import { config } from '../../../config';



// 1. Search flights based on source, destination, and date
export const searchFlights = async (from, to, departureDate) => {
  try {
    const response = await axios.get(`${config.serverURL}/customer/flightlist`, {
      params: {
        from,
        to,
        date: departureDate,
      },
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error searching flights:', error);
    throw error;
  }
};
