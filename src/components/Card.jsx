import { Link } from "react-router-dom";
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { useCart } from "../context/CartContext";

import { shortenText } from "../helper/helper";
import styles from "../components/Card.module.css";

function Card({ product }) {
  const { id, title, image, price } = product;

  const [state, dispatch] = useCart();

  const clickHandler = () => {
    dispatch({
      type: "add",
      payload: product,
    });
  };

  
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
          <button onClick={clickHandler}>
            <TbShoppingBagCheck />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
