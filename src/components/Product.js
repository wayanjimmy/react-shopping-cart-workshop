import React from 'react';
import PropTypes from 'prop-types';

import Price from '../components/Price';

const Product = ({ product, handleAddToCart }) => (
  <div className="column">
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img alt={product.name} src={product.imageSrc} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{product.name}</p>
            <div className="content">
              {product.desc}
              <br />
            </div>
            <h5>
              <Price amount={product.price} />
            </h5>
            <button
              className="button is-primary"
              onClick={() => handleAddToCart(product)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Product.propTypes = {
  product: PropTypes.shape({
    imageSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }),
  handleAddToCart: PropTypes.func.isRequired
};

export default Product;
