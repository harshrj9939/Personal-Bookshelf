
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://openlibrary.org/search.json?q=YOUR_QUERY&limit=10&page=1',
});

export const searchBooks = async (query, limit = 1, page = 1) => {
    try {
        const response = await api.get(`search.json?q=${query}&limit=${limit}&page=${page}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data', error);
        throw error;
    }
};
