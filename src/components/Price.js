import React from 'react';
import { formatPrice } from '../lib/helpers';

const Price = ({ value }) => (
  <span>{formatPrice(value)}</span>
);

export default Price;
