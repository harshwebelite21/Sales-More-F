const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_filterProducts":
      return {
        ...state,
        filterProducts: [...action.payload],
        allProducts: [...action.payload],
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

      const filteredItems = tempData.filter((item) => {
        const nameIncludesText = item.name
          .toLowerCase()
          .includes(state.filters.text.toLowerCase());
        const categoryFilterActive = state.filters.category !== "all";
        const categoryMatchesFilter = item.category === state.filters.category;
        const companyFilterActive = state.filters.company !== "all";
        const companyMatchesFilter = item.company === state.filters.company;
        const priceMatchFilter =
          item.price > state.filters.minPrice &&
          item.price < state.filters.maxPrice;

        return (
          nameIncludesText &&
          (categoryFilterActive ? categoryMatchesFilter : true) &&
          (companyFilterActive ? companyMatchesFilter : true) &&
          priceMatchFilter
        );
      });

      return {
        ...state,
        filterProducts: filteredItems,
      };
    }

    case "UPDATE_CATEGORY_VALUE": {
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    }

    case "UPDATE_COMPANY_VALUE": {
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    }

    case "UPDATE_PRICE_VALUE": {
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    }

    case "CLEAR_FILTER": {
      return {
        ...state,
        filters: {
          text: "",
          category: "all",
          company: "all",
          minPrice: 0,
          maxPrice: Infinity,
        },
      };
    }
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
