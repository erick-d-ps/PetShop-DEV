import { createContext, ReactNode, useState } from "react";
import { ProdutoProps } from "../pages/home";

interface cartProviderProps {
  children: ReactNode;
}

interface cartContextData {
  cart: CartProps[];
  cartamount: number;
  addItemcart: (newitem: ProdutoProps) => void;
  RemuvItemCart: (item: CartProps) => void;
  FinalizeOrder: () => void;
  excuirItem: (item: CartProps) => void;
  total: string ;
  totalFrete: string
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
  const [total, setTotal] = useState("")
  const [totalFrete, setTotalfret] = useState("")
  

  function addItemcart(newItem: ProdutoProps) {
    const indexItem = cart.findIndex(item => item.id === newItem.id);

    if (indexItem !== -1) {
      let cartList = cart;

      cartList[indexItem].amount = cartList[indexItem].amount + 1;
      cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;

      setCart(cartList);
      totalResultCart(cartList);
      return
    }
    let data = {
      ...newItem,
      amount: 1,
      total: newItem.price,
    };
    setCart(products => [...products, data]);
    totalResultCart([...cart, data])
  }

  function RemuvItemCart(item: CartProps){
    const indexItem = cart.findIndex(item => item.id === item.id);

    if(cart[indexItem]?.amount >1){
      let cartList = cart;

      cartList[indexItem].amount = cartList[indexItem].amount -1;
      cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price;

      setCart(cartList);
      totalResultCart(cartList);
      return
    }

    const remuvItem = cart.filter(produto => produto.id !== item.id )
    setCart(remuvItem)
    totalResultCart(remuvItem)
  }

  function excuirItem(item: CartProps){
    const remuvItem = cart.filter(produto => produto.id !== item.id )

    setCart(remuvItem)
    totalResultCart(remuvItem)
  }

  function totalResultCart( item: CartProps[]){
       
    let mycart = item;
    let fret = 70;

    let result = mycart.reduce((acc, obj) => {return acc + obj.total}, 0);
    const totalFrete = result + fret

    const formateResultFret = totalFrete.toLocaleString("pt-BR", {style:"currency", currency: "BRL"})
    const ResultFormatd = result.toLocaleString("pt-BR", {style:"currency", currency:"BRL"})

   setTotal(ResultFormatd);
   setTotalfret(formateResultFret);

  }


  function FinalizeOrder(){
    setCart([])
    return
  } 


  return (
    <cartContext.Provider
      value={{
        cart,
        cartamount: cart.length,
        addItemcart,
        FinalizeOrder,
        RemuvItemCart,
        excuirItem,
        total,
        totalFrete
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export default cartProvider;
