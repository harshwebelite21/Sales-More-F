import axios from "axios";
import { createContext, useContext, useEffect } from "react";

const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";

const AppProvider = ({ children }) => {
  useEffect(() => {
    const getProducts = async (url) => {
      const res = await axios.get(url);
      console.log("🚀 ~ getProducts ~ res:", res.data)
    };
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ myName: "Harsh Vaghasiya" }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
