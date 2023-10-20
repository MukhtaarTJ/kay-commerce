import { createContext, useReducer } from "react";

const initialState = {
  cart: [],
};

export const CartContext = createContext();
export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { cart: [...state.cart, action.payload] };
    case "REMOVE_FROM_CART":
      console.log("Removing product with ID:", action.payload.id);
      const updatedCart = state.cart.filter(
        (product) => product.id !== action.payload.id
      );
      console.log("Updated Cart:", updatedCart);
      return {
        cart: updatedCart,
      };
    default:
      return state;
  }
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
