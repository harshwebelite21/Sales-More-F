import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({ quantity, increaseQuantity, decreaseQuantity }) => {
  return (
    <>
      <style>
        {`
       .cart-quantity {
        display: flex; 
        align-items: center; 
        justify-content: center; 
        background-color: #f0f0f0; 
        border-radius: 8px; 
        padding: 10px; 
      }
      
      .cart-quantity h2 {
        margin: 0 20px; /* Space between the quantity and the buttons */
        font-size: 24px; /* Larger text size for the quantity */
      }
      
      .faMinus,
      .faPlus {
        color: #333; 
        cursor: pointer; 
      }
      
      .faMinus:hover,
      .faPlus:hover {
        color: #007bff; /* Change color on hover to indicate interactivity */
      }
          
               
      `}
      </style>
      <div className="cart-quantity">
        <FaMinus className="faMinus" onClick={decreaseQuantity} />
        <h2> {quantity}</h2>
        <FaPlus className="faPlus" onClick={increaseQuantity} />
      </div>
    </>
  );
};

export default CartAmountToggle;