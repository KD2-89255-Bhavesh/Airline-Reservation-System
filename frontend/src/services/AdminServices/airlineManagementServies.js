import axios from 'axios'
import { config } from '../../../config';

export const fetchAirline = async () => {
  try {
    const response = await axios.get(`${config.serverURL}/admin/airlineManagement`);
    return response.data;
  } catch (error) {
    console.error('Error fetching airline count:', error);
    return 0;
  }
};

export const addAirline = async (airlineData) => {
  try {
    const response = await axios.post(`${config.serverURL}/admin/addairline`, airlineData);
    return response.data;
  } catch (error) {
    console.error('Error adding airline:', error);
    throw error; // Propagate the error to be handled by the caller
  }
}