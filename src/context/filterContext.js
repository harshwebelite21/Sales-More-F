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
  all_products: [],
  gridView: true,
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

  const sorting = (event) => {
    const userSortValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userSortValue });
  };

  const memoizedState = useMemo(
    () => ({ ...state, setGridView, setListView, sorting }),
    [state, setGridView, setListView, sorting],
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
