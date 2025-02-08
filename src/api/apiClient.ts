import axios, { AxiosInstance } from 'axios';
import useErrorStore from '../store/errorStore';

// Create an Axios instance
const apiClient: AxiosInstance = axios.create({
  baseURL: 'https://your-api-url.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Global response and error handling
apiClient.interceptors.request.use(
  config => {
    // Perform actions before request is sent
    useErrorStore.getState().setError(null);
    return config;
  },
  error => {
    useErrorStore.getState().setError('Request error');
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    useErrorStore.getState().setError(error.response?.data?.message || 'Unknown error');
    return Promise.reject(error);
  },
);

export default apiClient;
