import React, { useState } from 'react';
import { searchBooks } from '../Api/api.js';

const Home = () => {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        if (!query) {
            alert('Please enter a search query.');
            return;
        }

        setLoading(true);
        try {
            const result = await searchBooks(query);
            setBooks(result.docs);
        } catch (error) {
            console.error('Error fetching data', error);
            setBooks([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Open Library Book Search</h1>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for books..."
            />
            <button onClick={handleSearch}>Search</button>
            {loading && <p>Loading...</p>}
            {books.length > 0 && (
                <ul>
                    {books.map((book) => (
                        <li key={book.key}>
                            <strong>Title:</strong> {book.title} <br />
                            <strong>Author(s):</strong> {book.author_name ? book.author_name.join(', ') : 'Unknown'}
                        </li>
                    ))}
                </ul>
            )}
            {books.length === 0 && !loading && <p>No books found.</p>}
        </div>
    );
};

export default Home;
