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
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  const setGridView = useCallback(
    () => dispatch({ type: "SET_GRIDVIEW" }),
    [dispatch],
  );

  const setListView = useCallback(
    () => dispatch({ type: "SET_LISTVIEW" }),
    [dispatch],
  );

  const memoizedState = useMemo(
    () => ({ ...state, setGridView, setListView }),
    [state, setGridView, setListView],
  );

  // To set the grid view

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
