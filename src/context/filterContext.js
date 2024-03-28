import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  React,
  useMemo,
  useCallback,
} from "react";
import reducer from "../reducer/filterReducer";
import { useProductContext } from "./productContext";

const FilterContext = createContext();
const initialState = {
  filterProducts: [],
  allProducts: [],
  gridView: true,
  filters: {
    text: "",
    category: "all",
    company: "all",
    minPrice: 0,
    maxPrice: Infinity,
  },
  sortingValue: "lowest",
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  // To set the grid view
  const setGridView = useCallback(
    () => dispatch({ type: "SET_GRIDVIEW" }),
    [dispatch],
  );

  const setListView = useCallback(
    () => dispatch({ type: "SET_LISTVIEW" }),
    [dispatch],
  );

  // TO set The category
  const categoryFilter = (event) => {
    const { name, value } = event.target;
    return dispatch({
      type: "UPDATE_CATEGORY_VALUE",
      payload: { name, value },
    });
  };

  // For filtering the data
  const filteringGetValue = (event) => {
    const { name, value } = event.target;
    return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };

  // For Filter using company
  const companyFilter = (event) => {
    const { name, value } = event.target;
    return dispatch({ type: "UPDATE_COMPANY_VALUE", payload: { name, value } });
  };

  // For Filter using Price
  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    return dispatch({ type: "UPDATE_PRICE_VALUE", payload: { name, value } });
  };

  // For Clear the filter
  const clearFilter = () => {
    dispatch({ type: "CLEAR_FILTER" });
  };

  const sorting = (event) => {
    const userSortValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userSortValue });
  };
  useEffect(
    () => dispatch({ type: "GET_FILTER_DATA", payload: products }),
    [state.filters],
  );

  const memoizedState = useMemo(
    () => ({
      ...state,
      setGridView,
      setListView,
      filteringGetValue,
      categoryFilter,
      companyFilter,
      handlePriceChange,
      clearFilter,
      sorting,
    }),
    [
      state,
      setGridView,
      setListView,
      filteringGetValue,
      categoryFilter,
      companyFilter,
      handlePriceChange,
      clearFilter,
      sorting,
    ],
  );

  // To sort The product
  useEffect(() => {
    dispatch({ type: "SORTING_PRODUCTS", payload: products });
  }, [state.sortingValue]);

  useEffect(() => {
    dispatch({ type: "LOAD_filterProducts", payload: products });
  }, [products]);
  return (
    <FilterContext.Provider value={memoizedState}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => useContext(FilterContext);
