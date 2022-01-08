import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./components.css";

const Cart = (props) => {
  const [subtotal, setSubtotal] = useState(0);
  useEffect(() => {
    if (props.cartItems.length > 0) {
      let sum = 0;
      let subtotals = Array.from(document.querySelectorAll(".subtotal"));
      subtotals.forEach((subtotal) => {
        let price = parseFloat(subtotal.textContent.slice(1));
        sum += price;
      });
      setSubtotal(sum);
    }
  });

  const addRemoveButtonClick = (e) => {
    let productItem = JSON.parse(e.target.parentElement.parentElement.id);
    let request = e.target.id;
    if (request === "remove") {
      props.setCartNumber(props.cartNumber - 1);
    } else if (request === "add") {
      props.setCartNumber(props.cartNumber + 1);
    }
    props.addRemoveFromCart(productItem, request);
  };

  return (
    <div className="cart-container">
      <div className="cart-header">Your Cart</div>
      <table className="cart-items">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {props.cartItems.map((item) => {
            return (
              <tr id={JSON.stringify(item)} key={Math.random()}>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td className="quantity-col">
                  <div>{item.quantity}</div>
                  <button id="remove" onClick={addRemoveButtonClick}>
                    -
                  </button>
                  <button id="add" onClick={addRemoveButtonClick}>
                    +
                  </button>
                </td>
                <td className="subtotal">{`$${(
                  item.quantity * item.price
                ).toFixed(2)}`}</td>
              </tr>
            );
          })}
          <tr>
            <td style={{ fontWeight: "bold" }}>Subtotal</td>
            <td></td>
            <td></td>
            <td>{`$${subtotal.toFixed(2)}`}</td>
          </tr>
        </tbody>
      </table>
      <Link to="../checkout">
        <button className="checkout">Guest Checkout</button>
      </Link>
    </div>
  );
};

export default Cart;
