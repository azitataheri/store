import { createContext, useContext, useReducer } from "react";

const initialState = {};

const reducer = (state, action) => {
  switch(action.type){
    case 'ADD_TO_CART':
        return{...state, }
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
  const {state, dispatch} = useContext(CartContext);
  return [state, dispatch]
};

export default CartProvider;
// eslint-disable-next-line react-refresh/only-export-components
export { useCart };
