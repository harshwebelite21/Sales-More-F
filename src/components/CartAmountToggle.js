import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import "../styles/CartAmountToggle.css"; // Import the CSS file

const CartAmountToggle = ({ quantity, increaseQuantity, decreaseQuantity }) => (
  <div className="cart-quantity">
    <FaMinus className="faMinus" onClick={decreaseQuantity} />
    <h2> {quantity}</h2>
    <FaPlus className="faPlus" onClick={increaseQuantity} />
  </div>
);

export default CartAmountToggle;
