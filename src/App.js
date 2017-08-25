import React, { Component } from 'react';

import Card from './components/Card';
import Divider from './components/Divider';
import PriceItem from './components/PriceItem';
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

  onAddOrder = (PriceItem) => {
    this.setState({ orders: [...this.state.orders, PriceItem] });
  }

  onRemoveLastOrder = (PriceItem) => {
    this.setState({ orders: [...this.state.orders.slice(0, -1)] });
  }

  onResetOrders = (PriceItem) => {
    this.setState({ orders: [] });
  }

  getPriceForOrderType = (type) => {
    return this.types.find(t => t.type === type).price;
  }

  getLabelForOrderType = (type) => {
    return this.types.find(t => t.type === type).label;
  }

  getTotalPrice = () => {
    const { orders } = this.state;
    return orders.reduce((sum, order) => sum + this.getPriceForOrderType(order), 0);
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

        {orders.map((orderType, i) => (
          <PriceItem
            key={i}
            label={this.getLabelForOrderType(orderType)}
            price={this.getPriceForOrderType(orderType)}
          />
        ))}

        <Divider />

        <h2>
          <PriceItem label="Total" price={this.getTotalPrice()} />
        </h2>
      </Card>
    );
  }
}

export default App;
