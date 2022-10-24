import { createContext, useState } from "react";
import { CardHeaderProps } from "react-bootstrap/esm/CardHeader";
import { productsArray } from "./productStore";

export const CartContext = createContext({
  items: [],
  getProdcutQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  delete: () => {},
  getTotalCost: () => {},
});

export function CartPorvider() {
  const [cartProducts, setCartProducts] = useState([]);

  function getProdcutQuantity() {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }
  function addOnetoCart(id) {
    const quantity = getProdcutQuantity(id);
    if (quantity === 0) {
      // not in cart
      setCartProducts = [...cartProducts]; // ended here
    } else {
      // in cart
    }
  }

  const contextValue = {
    items: cartProducts,
    getProdcutQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    delete: () => {},
    getTotalCost: () => {},
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
