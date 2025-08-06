import axios from 'axios';
import { toast } from 'react-toastify';
import { config } from './../../../config';


// Set up axios instance with auth token
// const apiClient = axios.create({
//     baseURL: API_BASE_URL,
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

// Add request interceptor to include auth token
// apiClient.interceptors.request.use((config) => {
//     const token = localStorage.getItem('authToken');
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// });

export const getProfileData = async () => {
    try {
        const response = await axios.get(`${config.serverURL}/profile`, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching profile data:', error);
        toast.error('Failed to fetch profile data');
        return null;
    }
}