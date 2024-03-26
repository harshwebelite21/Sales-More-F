const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_filterProducts":
      return {
        ...state,
        filterProducts: [...action.payload],
        all_products: [...action.payload],
      };
    default:
      return state;
  }
};
export default filterReducer;
