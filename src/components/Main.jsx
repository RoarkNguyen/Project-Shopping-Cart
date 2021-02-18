import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";

Main.propTypes = {};

function Main(props) {
  const { products, onAdd } = props;
  return (
    <div className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </div>
  );
}

export default Main;
