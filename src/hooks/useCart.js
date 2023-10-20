import { useContext } from "react";
import { CartContext } from "../context/cartContext";
export const useCartContext = () => {
  const context = useContext(CartContext);

  return context;
};
