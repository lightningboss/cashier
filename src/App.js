import React, { Component } from 'react';
import { getPriceForOrderType } from './lib/helpers';

import Card from './components/Card';
import Divider from './components/Divider';
import PriceItem from './components/PriceItem';
import OrderList from './components/OrderList';
import OrderButton from './components/OrderButton';

import './App.css';

class App extends Component {
  state = {
    orders: [],
  }

  types = [
    { type: 'cola', label: 'Cola', price: 4 },
    { type: 'fanta', label: 'Fanta', price: 4 },
    { type: 'gummibärchen', label: 'Gummibärchen', price: 3.5 },
    { type: 'knabber', label: 'Knabber', price: 1.95 },
  ]

  onAddOrder = (newOrder) => {
    this.setState({ orders: [...this.state.orders, newOrder] });
  }

  onRemoveLastOrder = () => {
    this.setState({ orders: [...this.state.orders.slice(0, -1)] });
  }

  onResetOrders = () => {
    this.setState({ orders: [] });
  }

  getTotalPrice = () => {
    const { orders } = this.state;
    return orders.reduce((sum, order) => sum + getPriceForOrderType(order, this.types), 0);
  }

  render() {
    const { orders } = this.state;

    return (
      <Card title="Cashier">
        <div className="button-group">
          {this.types.map(({ type, label }) => (
            <OrderButton key={type} label={label} type={type} handleOnClick={this.onAddOrder} />
          ))}
        </div>

        <Divider />

        <div className="button-group">
          <button onClick={this.onRemoveLastOrder}>Stornieren</button>
          <button onClick={this.onResetOrders}>Reset</button>
        </div>

        {orders.length > 0 && <Divider />}
        <OrderList orders={orders} types={this.types} />
        <Divider />

        <h2>
          <PriceItem label="Total" price={this.getTotalPrice()} />
        </h2>
      </Card>
    );
  }
}

export default App;
