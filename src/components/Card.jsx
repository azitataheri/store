import { Link } from "react-router-dom";
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { useCart } from "../context/CartContext";

import { productQuantity, shortenText } from "../helper/helper";
import styles from "../components/Card.module.css";
import { MdDeleteOutline } from "react-icons/md";

function Card({ product }) {
  const { id, title, image, price } = product;

  const [state, dispatch] = useCart();


  const quantity = productQuantity(state, id)
  console.log(quantity);
  

  const clickHandler = (type) => {
    dispatch({
      type,
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
          <button onClick={() => clickHandler('ADD_ITEM')}>
            <TbShoppingBagCheck />
          </button>
          <button onClick={() => clickHandler('REMOVE_ITEM')}>
            <MdDeleteOutline />
          </button>
          <button onClick={() => clickHandler('INCREASE')}>+</button>
          <button onClick={() => clickHandler('DECREASE')}>-</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
