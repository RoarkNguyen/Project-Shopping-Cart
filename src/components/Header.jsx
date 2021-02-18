import React from "react";
import PropTypes from "prop-types";

Header.propTypes = {};

function Header(props) {
  const { countCartItems } = props;
  return (
    <div className="row block center">
      <div>
        <a href="#/">
          <h1>Small Shopping Cart</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Cart{" "}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ""
          )}
        </a>{" "}
        <a href="#/signIn">SignIn</a>
      </div>
    </div>
  );
}

export default Header;
