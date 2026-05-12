import { createContext, useContext, useReducer } from "react";
import { sumProducts } from "../helper/helper";

const initialState = {
  selectedItems: [],
  itemCounter: 0,
  total: 0,
  checkout: false,
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({...action.payload, quantity: 1 })
      }
      return {
        ...state,// four elements of state put and spread here
        ...sumProducts(state.selectedItems), // replace itemsCounter and total with prev values
        checkout: false, // checkout value put here that its initial value is false
      };

    default:
      throw new Error("Invalid Action");
  }
};
const CartContext = createContext();

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

// custome hook cart
const useCart = () => {
  const { state, dispatch } = useContext(CartContext);
  return [state, dispatch];
};

export default CartProvider;
// eslint-disable-next-line react-refresh/only-export-components
export { useCart };
