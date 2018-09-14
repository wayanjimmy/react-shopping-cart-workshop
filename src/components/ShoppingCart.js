import React from 'react';
import PropTypes from 'prop-types';

import Price from './Price';

const ShoppingCart = ({ cartItems, handleRemoveItemFromCart }) => {
  const total = cartItems.reduce((carrier, cartItem) => {
    return carrier + cartItem.quantity * cartItem.product.price;
  }, 0);
  return (
    <div className="column">
      <h3 className="title is-4">Shopping Cart</h3>
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={index}>
              <td>{item.product.name}</td>
              <td>{item.product.price}</td>
              <td>{item.quantity}</td>
              <td>
                <button
                  className="button is-danger is-small"
                  onClick={() => handleRemoveItemFromCart(item)}
                >
                  -
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>
        Total : <Price amount={total} />
      </h3>
    </div>
  );
};

ShoppingCart.propTypes = {
  cartItems: PropTypes.array.isRequired,
  handleRemoveItemFromCart: PropTypes.func.isRequired
};

ShoppingCart.defaultProps = {
  cartItems: []
};

export default ShoppingCart;
