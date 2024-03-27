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

    case "UPDATE_FILTER_VALUE": {
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    }

    case "GET_FILTER_DATA": {
      const tempData = [...action.payload];
      const filteredItems = tempData.filter((item) =>
        item.name.toLowerCase().includes(state.filters.text.toLowerCase()),
      );

      return {
        ...state,
        filterProducts: filteredItems,
      };
    }

    default:
      return state;
  }
};
export default filterReducer;
