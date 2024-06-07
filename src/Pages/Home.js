import React, { useState, useEffect } from 'react';
import { fetchData } from './api'; // Import the fetchData function from api.js

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await fetchData('/endpoint'); // Replace '/endpoint' with your API endpoint
            setData(result);
        };

        getData();
    }, []);

    return (
        <div>
            {data.map(item => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Home;
