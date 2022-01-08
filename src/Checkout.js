import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PaymentForm from "./PaymentForm";
import "react-credit-cards/es/styles-compiled.css";
import "./components.css";

const Checkout = (props) => {
  return (
    <div className="checkout-container">
      <div className="contact">
        {" "}
        Contact Info
        <div className="input">
          <input type="text" id="name" placeholder="Full Name"></input>
        </div>
        <div className="input">
          <input type="text" id="email" placeholder="Email"></input>
        </div>
        <div className="input">
          <input type="text" id="phone" placeholder="Phone Number"></input>
        </div>
        <div className="input">
          <input type="text" id="street" placeholder="Street"></input>
        </div>
        <div className="input">
          <input type="text" id="city" placeholder="City"></input>
        </div>
        <div className="input">
          <input type="text" id="state" placeholder="State"></input>
        </div>
        <div className="input">
          <input type="text" id="zip" placeholder="Zip Code"></input>
        </div>
      </div>
      <PaymentForm />
      <Link to="../confirmation">
        <button className="confirmation">Confirm</button>
      </Link>
    </div>
  );
};

export default Checkout;
