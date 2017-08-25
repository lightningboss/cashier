import React, { Component } from 'react';
import OrderButton from './OrderButton';

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
  onAddToOrders = (item) => {
    this.setState({ orders: [...this.state.orders, item] });
  }
  onRemoveLastOrder = (item) => {
    this.setState({ orders: [...this.state.orders.slice(0, -1)] });
  }
  onResetOrders = (item) => {
    this.setState({ orders: [] });
  }
  formatPrice(price) {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price);
  }
  getPriceForOrderType(type) {
    return this.types.find(t => t.type === type).price;
  }
  getLabelForOrderType(type) {
    return this.types.find(t => t.type === type).label;
  }
  getSummedPriceOfAllOrders = () => {
    const { orders } = this.state;
    return orders.reduce((sum, order) => sum + this.getPriceForOrderType(order), 0);
  }
  render() {
    return (
      <div className="card">
        <h1>Cashier</h1>
        {
          this.types.map(({ type, label }) => (
            <OrderButton
              key={type}
              label={label}
              type={type}
              handleOnClick={this.onAddToOrders}
            />
          ))
        }
        <hr />
        {this.state.orders.map((orderType, i) => (
          <div key={i} className="order-item">
            <span>{this.getLabelForOrderType(orderType)}</span>
            <span>{this.formatPrice(this.getPriceForOrderType(orderType))}</span>
          </div>
        ))}
        <hr />
        <div>
          <h2 className="order-item">
            <span>Summe:</span>
            <span>{this.formatPrice(this.getSummedPriceOfAllOrders())}</span>
            </h2>
          <button onClick={this.onRemoveLastOrder}>Stornieren</button>
          <button onClick={this.onResetOrders}>Reset</button>
        </div>
      </div>
    );
  }
}

export default App;
