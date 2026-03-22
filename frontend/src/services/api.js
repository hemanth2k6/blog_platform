import axios from 'axios';

// Get the base URL from env
let baseURL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Auto-correct: if you pasted 'https://blog.platform-817h.onrender.com' without '/api', we add it!
if (!baseURL.endsWith('/api')) {
  // Remove any trailing slash before adding /api
  baseURL = baseURL.replace(/\/$/, '') + '/api';
}

const api = axios.create({
  baseURL,
  withCredentials: true, // This is equivalent to fetch's credentials: 'include' for Axios
});

// Response interceptor for generic error handling
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // We can handle specific global errors here, e.g., redirect to login on 401
    return Promise.reject(error);
  }
);

export default api;
