const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { id, color, quantity, product } = action.payload;
      const existingItemIndex = state.cart.findIndex(
        (item) => item.id === id + color,
      );
      if (existingItemIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex].quantity += quantity;
        return {
          ...state,
          cart: updatedCart,
        };
      }
      const cartProduct = {
        name: product.name,
        id: id + color,
        color,
        quantity: Math.min(quantity, product.stock),
        image: product.image[0],
        price: product.price,
        max: product.stock,
      };
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }

    case "REMOVE_ITEM": {
      const id = action.payload;

      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== id),
      };
    }

    case "CLEAR_CART": {
      return {
        ...state,
        cart: [],
      };
    }

    case "DECREASE_QUANTITY": {
      const id = action.payload;

      const existingItemIndex = state.cart.findIndex((item) => item.id === id);
      const updatedCart = [...state.cart];
      if (updatedCart[existingItemIndex].quantity > 0) {
        updatedCart[existingItemIndex].quantity -= 1;
      }
      if (updatedCart[existingItemIndex].quantity === 0) {
        updatedCart.splice(existingItemIndex, 1);
      }
      return {
        ...state,
        cart: updatedCart,
      };
    }

    case "INCREASE_QUANTITY": {
      const id = action.payload;

      const existingItemIndex = state.cart.findIndex((item) => item.id === id);
      const updatedCart = [...state.cart];

      // Increment quantity if it's less than the maximum stock and greater than 0
      if (
        updatedCart[existingItemIndex].quantity <
        updatedCart[existingItemIndex].max
      ) {
        updatedCart[existingItemIndex].quantity += 1;
      } else {
        // If the quantity is already at the maximum stock or 0, do nothing
        // Alternatively, you could set it to 1 or max, depending on your requirements
      }

      return {
        ...state,
        cart: updatedCart,
      };
    }

    default:
      return state;
  }
};
export default cartReducer;
