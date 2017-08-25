import React from 'react';

const OrderButton = ({ label, type, handleOnClick }) => (
  <button onClick={() => handleOnClick(type)}>{label}</button>
);

export default OrderButton;
