import React from 'react';
import './Card.css';

const Card = ({ title, children}) => (
  <div className="card">
    <h1>{title}</h1>
    {children}
  </div>
);

export default Card;
