import React from 'react';

const Card = ({ item }) => (
    <div className="card">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
    </div>
);

export default Card;
