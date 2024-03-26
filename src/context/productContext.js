import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  React,
  useMemo,
} from "react";
import reducer from "../reducer/productReducer";

const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // To get the call products
  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "MY_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };
  // To get the single product
  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "MY_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };
  const memoizedValue = useMemo(
    () => ({ ...state, getSingleProduct }),
    [state, getSingleProduct],
  );
  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={memoizedValue}>{children}</AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => useContext(AppContext);

export { AppProvider, AppContext, useProductContext };
