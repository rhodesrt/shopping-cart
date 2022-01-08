import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Nav";
import "./components.css";

const App = (props) => {
  return (
    <div className="app">
      <Header cartNumber={props.cartNumber} />
      <Outlet />
    </div>
  );
};

export default App;
