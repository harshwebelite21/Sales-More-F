import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  React,
  useMemo,
} from "react";
import { useProductContext } from "./productContext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();
const initialState = {
  filterProducts: [],
  all_products: [],
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);
  const memoizedState = useMemo(() => state, [state]);

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
