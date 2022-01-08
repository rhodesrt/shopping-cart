import React, { useEffect, useState } from "react";
import "./components.css";

const ItemList = (props) => {
  return (
    <div className="store-items">
      {props.items.map((item) => {
        return (
          <Item
            addCartItem={props.addCartItem}
            key={Math.random()}
            title={item.title}
            src={item.src}
            price={item.price}
            setCartNumber={props.setCartNumber}
          />
        );
      })}
    </div>
  );
};

export default ItemList;

const Item = (props) => {
  const handleClick = () => {
    props.addCartItem({
      title: props.title,
      price: props.price,
      quantity: 1,
    });

    let numberOfItems = parseInt(
      document.querySelector(".cart-number").textContent
    );
    props.setCartNumber(numberOfItems + 1);
  };

  return (
    <div className="shop-item">
      <img src={require(`${props.src}`)} alt={props.title}></img>
      <div style={{ fontWeight: "bold" }}>{props.title}</div>
      <div>{props.price}</div>
      <button onClick={handleClick} className="add-to-cart">
        Add To Cart
      </button>
    </div>
  );
};
