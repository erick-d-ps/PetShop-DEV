import { createContext, ReactNode, useState } from "react";
import { ProdutoProps } from "../pages/home";

interface cartProviderProps {
  children: ReactNode;
}

interface cartContextData {
  cart: CartProps[];
  cartamount: number;
  addItemcart: (newitem: ProdutoProps) => void;
}

interface CartProps {
  id: string;
  title: string;
  description: string;
  price: number;
  cover: string;
  amount: number;
  total: number;
}

export const cartContext = createContext({} as cartContextData);

function cartProvider({ children }: cartProviderProps) {
  const [cart, setCart] = useState<CartProps[]>([]);

  function addItemcart(newitem: ProdutoProps) {
    const indexItem = cart.findIndex(item => item.id === newitem.id);

    if (indexItem !== -1) {
      let cartList = cart;

      cartList[indexItem].amount = cartList[indexItem].amount + 1;
      cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;

      setCart(cartList);
      return
    }
    let data = {
      ...newitem,
      amount: 1,
      total: newitem.price,
    };
    setCart(products => [...products, data]);
  }

  return (
    <cartContext.Provider
      value={{
        cart,
        cartamount: cart.length,
        addItemcart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export default cartProvider;
