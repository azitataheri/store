import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/config";

const productContext = createContext();

function ProductsProvider({ children }) {
  const [products, setProdutcs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setProdutcs(await api.get("/products"));
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <productContext.Provider value={products}>
      {children}      
    </productContext.Provider>
  );
}


// custom hook
const useProducts = () => {
  const products = useContext(productContext);
  return products;
}; 

export default ProductsProvider;
// eslint-disable-next-line react-refresh/only-export-components
export { useProducts };
