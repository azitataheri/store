import { Link } from "react-router-dom";
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import shortenText from "../helper/helper";
import styles from "../components/Card.module.css";
function Card({ product }) {
  const { id, title, image, price } = product;

  return (
    <div className={styles.card}>
      <img src={image} alt={title} style={{ width: "150px" }} />
      <h3>{shortenText(title)}</h3>
      <p>{price}$</p>
      <div className={styles.actions}>
          <Link to={`/products/${id}`}>
            <TbListDetails />
          </Link>
        <div>
          <button>
            <TbShoppingBagCheck />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
