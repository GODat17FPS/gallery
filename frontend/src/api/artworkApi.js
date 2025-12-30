import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Artwork API
export const artworkApi = {
    // Get all artworks
    getAll: async () => {
        const response = await api.get('/artworks');
        return response.data;
    },

    // Get artwork by ID
    getById: async (id) => {
        const response = await api.get(`/artworks/${id}`);
        return response.data;
    },

    // Get artwork images
    getImages: async (id) => {
        const response = await api.get(`/artworks/${id}/images`);
        return response.data;
    },

    // Search artworks
    search: async ({ title, artist }) => {
        const params = new URLSearchParams();
        if (title) params.append('title', title);
        if (artist) params.append('artist', artist);
        const response = await api.get(`/artworks/search?${params}`);
        return response.data;
    },
};

// Auth API
export const authApi = {
    // Register new user
    register: async (email, password) => {
        const response = await api.post('/auth/register', { email, password });
        return response.data;
    },

    // Login user
    login: async (email, password) => {
        const response = await api.post('/auth/login', { email, password });
        return response.data;
    },
};

export default api;
