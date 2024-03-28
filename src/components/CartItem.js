import React from "react";
import { FaTrash } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import { useCartContext } from "../context/cartContext";

const CartItem = ({ id, name, image, color, price, quantity }) => {
  const { removeItem, setIncrease, setDecrease } = useCartContext();

  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image.url} alt={id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color, color }}
            />
          </div>
        </div>
      </div>
      {/* price   */}
      <div className="cart-hide">
        <p>{price}</p>
      </div>

      {/* Quantity  */}
      <CartAmountToggle
        quantity={quantity}
        increaseQuantity={() => setIncrease(id)}
        decreaseQuantity={() => setDecrease(id)}
      />

      {/* //Subtotal */}
      <div className="cart-hide">
        <p>{price * quantity}</p>
      </div>

      <div>
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;
