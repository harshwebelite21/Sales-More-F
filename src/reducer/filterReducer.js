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

    case "GET_SORT_VALUE": {
      return {
        ...state,
        sortingValue: action.payload,
      };
    }

    case "SORTING_PRODUCTS": {
      let newSortData;
      const tempSortProduct = [...action.payload];

      switch (state.sortingValue) {
        case "a-z":
          newSortData = tempSortProduct.sort((a, b) =>
            a.name.localeCompare(b.name),
          );
          break;

        case "z-a":
          newSortData = tempSortProduct.sort((a, b) =>
            b.name.localeCompare(a.name),
          );
          break;

        case "lowest":
          newSortData = tempSortProduct.sort((a, b) => a.price - b.price);
          break;

        case "highest":
          newSortData = tempSortProduct.sort((a, b) => b.price - a.price);
          break;

        default:
          break;
      }

      return {
        ...state,
        filterProducts: newSortData,
      };
    }

    default:
      return state;
  }
};
export default filterReducer;
