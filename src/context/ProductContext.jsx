import { createContext, useEffect, useState } from "react";
import api from "../services/config";

const productContext = createContext();
function ProductsProvider() {
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

  return <productContext.Provider value={products}>{children}</productContext.Provider>;
}

export default ProductsProvider;
