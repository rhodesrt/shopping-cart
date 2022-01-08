import React, { useEffect, useState } from "react";
import "./components.css";
import ItemList from "./ItemList";
import shopItems from "./shopItems";

const Store = (props) => {
  const [sortPreference, setSortPreference] = useState("Price, high to low");
  const [notSortPreference, setNotSortPreference] = useState("Alphabetically");

  const handleClick = () => {
    setSortPreference(notSortPreference);
    setNotSortPreference(sortPreference);
  };

  const [sortedItems, setSortedItems] = useState(
    [...shopItems].sort((a, b) => {
      return parseInt(b.price) - parseInt(a.price);
    })
  );

  useEffect(() => {
    console.log("re-render");
    if (sortPreference === "Price, high to low") {
      setSortedItems(
        [...shopItems].sort((a, b) => {
          return parseInt(b.price) - parseInt(a.price);
        })
      );
    } else {
      setSortedItems(
        [...shopItems].sort((a, b) => {
          return a.title < b.title ? -1 : 1;
        })
      );
    }
  }, [sortPreference]);

  return (
    <div className="store-container">
      <div className="store-header">Products</div>
      <div className="sort-by">
        <div className="sort-by-text">SORT BY</div>
        <div className="dropdown">
          <button className="dropbtn">{sortPreference}</button>
          <div className="dropdown-content">
            <button onClick={handleClick}>{notSortPreference}</button>
          </div>
        </div>
      </div>
      <ItemList
        addCartItem={props.addCartItem}
        setCartNumber={props.setCartNumber}
        items={sortedItems}
      />
    </div>
  );
};

export default Store;
