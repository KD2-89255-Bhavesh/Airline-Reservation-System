import axios from 'axios'
import { config } from '../../../config';


export const getAirlineCount = async () => {
  try {
    const response = await axios.get(`${config.serverURL}/admin/airlines/count`);
    return response.data;
  } catch (error) {
    console.error('Error fetching airline count:', error);
    return 0;
  }
};


export const getFlightCount = async () => {
  try {
    const response = await axios.get(`${config.serverURL}/admin/airlines/flightcount`);
    return response.data;
  } catch (error) {
    console.error('Error fetching flight count:', error);
    return 0;
  }
};



export const getBookingCount = async () => {
  try {
    const response = await axios.get(`${config.serverURL}/admin/airlines/bookingcount`);
    return response.data;
  } catch (error) {
    console.error('Error fetching booking count:', error);
    return 0;
  }
};

export const getTotalAmountBooking = async () => {
  try {
    const response = await axios.get(`${config.serverURL}/admin/airlines/totalAmountBooking`);
    return response.data;
  } catch (error) {
    console.error('Error fetching total amount booking:', error);
    return 0;
  }
};

