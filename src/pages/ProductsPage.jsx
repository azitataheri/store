import styles from '../pages/Products.module.css'
import { useProducts } from "../context/ProductContext";

import Card from '../components/Card';

function ProductsPage() {
  const products = useProducts();
  console.log(products);

  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {!products.length && <p>Loading.....</p>}
        {products.map((product) =>
          <Card key={product.id} product={product} />
        )}
      </div>
      <div>Sidebar</div>
    </div>
  );
}

export default ProductsPage;
