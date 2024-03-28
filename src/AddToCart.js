import React, { useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import CartAmountToggle from "./components/CartAmountToggle";
import Button from "./styles/Button";
import { useCartContext } from "./context/cartContext";

const AddToCart = ({ product }) => {
  const { colors } = product;
  const [color, setColor] = useState(colors[0]);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCartContext();

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  return (
    <Wrapper>
      <div className="colors">
        <p>
          Colours:
          {colors.map((curColor) => (
            <button
              key={curColor}
              className={color === curColor ? "btnStyle active" : "btnStyle"}
              style={{ backgroundColor: curColor }}
              onClick={() => {
                setColor(curColor);
              }}
              type="button"
            >
              {color === curColor && <FaCheck className="checkStyle" />}
            </button>
          ))}
        </p>
      </div>
      <CartAmountToggle
        quantity={quantity}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />

      <NavLink to="/cart">
        <Button
          className="btn"
          onClick={() => addToCart(product.id, color, quantity, product)}
        >
          AddToCart
        </Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;

export default AddToCart;
