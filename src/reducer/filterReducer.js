const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_filterProducts":
      return {
        ...state,
        filterProducts: [...action.payload],
        all_products: [...action.payload],
      };

    case "SET_GRIDVIEW":
      return {
        ...state,
        gridView: true,
      };

    case "SET_LISTVIEW":
      return {
        ...state,
        gridView: false,
      };
    default:
      return state;
  }
};
export default filterReducer;
