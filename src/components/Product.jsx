import React from "react";
import PropTypes from "prop-types";

Product.propTypes = {};

function Product(props) {
  const { product, onAdd } = props;
  return (
    <div>
      <img className="small" src={product.image}></img>
      <h3>{product.name}</h3>
      <div>{product.price}</div>
      <div>
        <button onClick={() => onAdd(product)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
