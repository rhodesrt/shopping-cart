import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./components.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/shopping-cart/">Sail Shop</Link>
      </div>
      <div className="nav">
        <Link to="/shopping-cart/">Home</Link>
        <Link to="store">Products</Link>
        <Link to="cart">
          <div className="cart">
            <FontAwesomeIcon icon={faShoppingCart} />
            <div className="cart-number">{props.cartNumber}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
