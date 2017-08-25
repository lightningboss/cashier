import React from 'react';
import { getPriceForOrderType, getLabelForOrderType } from '../lib/helpers';

import PriceItem from './PriceItem';

const OrderList = ({ orders, types }) => (
  <div>
    {
      orders.map((orderType, i) => (
        <PriceItem
          key={i}
          label={getLabelForOrderType(orderType, types)}
          price={getPriceForOrderType(orderType, types)}
        />
      ))
    }
  </div>
);

export default OrderList;
