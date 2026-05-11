import { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContext";

import styles from "../pages/Products.module.css";
import Card from "../components/Card";

import Loader from "../components/Loader";
import { ImSearch } from "react-icons/im";
import { FaListUl } from "react-icons/fa";

function ProductsPage() {
  const products = useProducts();
  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState([]);

  useEffect(() => {
    setDisplayed(products);
  }, [products]);

  const searchHandler = () => {
    console.log("search");
  };

  const categoryHandler = (e) => {
    const { tagName } = e.target;
    const category = e.target.innerText.toLowerCase();
    if (tagName !== "LI") return;
    console.log(category);
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search Products..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        />
        <button onClick={searchHandler}>
          <ImSearch />
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
        <div>
          <div>
            <FaListUl />
            <p>Categories</p>
          </div>
          <ul onClick={categoryHandler}>
            <li>All</li>
            <li>Electronics</li>
            <li>Jewelery</li>
            <li>Men's clothing</li>
            <li>Women's clothing</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
