import React from 'react';
import Price from './Price';

import './PriceItem.css';

const PriceItem = ({ label, price }) => (
  <div className="price-item">
    <span>{label}</span>
    <Price value={price} />
  </div>
);

export default PriceItem;
