import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Store from "./Store";
import Cart from "./Cart";
import Home from "./Home";
import Checkout from "./Checkout";
import Confirmation from "./Confirmation";

const RouteSwitch = () => {
  const [cartNumber, setCartNumber] = useState(0);

  const [cartItems, setCartItems] = useState([]);
  const addCartItem = (item) => {
    // It item not in cartItems, add to cartItems
    if (
      cartItems.findIndex((product) => {
        return product.title === item.title;
      }) === -1
    ) {
      let newCartItems = cartItems;
      newCartItems.push(item);
      setCartItems(newCartItems);
      console.log("Added new item");
    } else {
      let newCartItems = cartItems;
      newCartItems[
        newCartItems.findIndex((product) => product.title === item.title)
      ].quantity += 1;
      setCartItems(newCartItems);
      console.log("Added one to existing item");
    }
  };

  const addRemoveFromCart = (item, request) => {
    console.log(`Requested to ${request} ${item.title}`);
    if (request === "remove") {
      // if quantity > 1 subtract one from quantity
      let newCartItems = cartItems;
      let currentQuantity =
        newCartItems[
          cartItems.findIndex((product) => product.title === item.title)
        ].quantity;
      if (currentQuantity > 1) {
        newCartItems[
          cartItems.findIndex((product) => product.title === item.title)
        ].quantity -= 1;
        setCartItems(newCartItems);
        // if quantity <= 1 => remove item from list
      } else {
        newCartItems.splice(
          cartItems.findIndex((product) => product.title === item.title),
          1
        );
        setCartItems(newCartItems);
      }
    } else if (request === "add") {
      let newCartItems = cartItems;
      newCartItems[
        cartItems.findIndex((product) => product.title === item.title)
      ].quantity += 1;
      setCartItems(newCartItems);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shopping-cart" element={<App cartNumber={cartNumber} />}>
          <Route index element={<Home />} />
          <Route
            path="store"
            element={
              <Store addCartItem={addCartItem} setCartNumber={setCartNumber} />
            }
          />
          <Route
            path="cart"
            element={
              <Cart
                cartItems={cartItems}
                addRemoveFromCart={addRemoveFromCart}
                setCartNumber={setCartNumber}
                cartNumber={cartNumber}
              />
            }
          />
          <Route path="checkout" element={<Checkout />} />
          <Route path="confirmation" element={<Confirmation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
