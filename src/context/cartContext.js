import React, { useEffect } from "react";
import cartReducer from "../reducer/cartReducer";

const { useContext, useReducer, useMemo } = require("react");
const { createContext } = require("react");

const CartContext = createContext();

const defaultState = {
  cart: [],
};

const initialState =
  JSON.parse(localStorage.getItem("cartState")) || defaultState;

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const addToCart = (id, color, quantity, product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, color, quantity, product },
    });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // To update state in local storage
  useEffect(() => {
    localStorage.setItem("cartState", JSON.stringify(state));
  }, [state]);

  // To increment decrement quantity
  const setDecrease = (id) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: id });
    // amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = (id) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: id });
    // amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  const memoizedState = useMemo(
    () => ({
      ...state,
      addToCart,
      removeItem,
      clearCart,
      setDecrease,
      setIncrease,
    }),
    [state, addToCart, removeItem, clearCart, setDecrease, setIncrease],
  );

  return (
    <CartContext.Provider value={memoizedState}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
