import axios from 'axios';

// Create an axios instance
const api = axios.create({
    baseURL: 'https://openlibrary.org/search.json?q=YOUR_QUERY&limit=10&page=1', // Replace with your API base URL
});

// Function to fetch data from a given endpoint
export const fetchData = async (endpoint) => {
    try {
        const response = await api.get(endpoint);
        return response.data;
    } catch (error) {
        console.error('Error fetching data', error);
        throw error;
    }
};
