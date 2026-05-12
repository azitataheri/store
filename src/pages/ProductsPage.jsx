import { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContext";

import { searchProducts } from "../helper/helper";
import { filterProducts } from "../helper/helper";
import { createQueryObject } from "../helper/helper";
import { getInitialQueries } from "../helper/helper";

import styles from "../pages/Products.module.css";
import Card from "../components/Card";
import Loader from "../components/Loader";
import SearchBox from "../components/SearchBox";

import { useSearchParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";


function ProductsPage() {
  const products = useProducts();
  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();


  useEffect(() => {
    setDisplayed(products);
    setQuery(getInitialQueries(searchParams));
  }, [products]);


  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);


  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery}/>
      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
       <Sidebar query={query} setQuery={setQuery}/>
      </div>
    </>
  );
}

export default ProductsPage;
