import React from 'react';

const Price = ({ value }) => (
  <span>{formatPrice(value)}</span>
);

export default Price;

function formatPrice(price) {
  return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price);
}
