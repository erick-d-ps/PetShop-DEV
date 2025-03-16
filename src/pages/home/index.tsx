import { useState, useEffect } from "react";
import { BsCartPlus } from "react-icons/bs";
import { useContext } from "react";
import { cartContext } from '../../contexts'


import { api } from "../../services/api";

export interface ProdutoProps{
  id: string;
  title: string;
  description: string;
  price: number;
  cover: string;
}

export function Home() {
  const { addItemcart,} = useContext(cartContext)
  const [Produto, setProduto] = useState<ProdutoProps[]>([])


useEffect(() => {
  async function adicinarProduto(){
    const resposta = await api.get("/products")
    setProduto(resposta.data)
  }
  adicinarProduto();
}, [])
  
function pushItemCart(item: ProdutoProps){
 addItemcart(item)
}


  return (
    <div className="bg-blue-50">
      <main className="w-full max-w-7xl px-4 mx-auto">
        <strong className="p-8 flex items-center justify-center">
        <p className="flex justify-center items-center  text-3xl font-medium  ">
          Produtos mais vendidos
        </p>
        </strong>
        <div className="grid p-7 grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {Produto.map((item) =>(
            <section key={item.id} className="p-1 w-full border border-neutral-100  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-neutral-500 ">
            <img
              src={item.cover}
              alt={item.title}
            />
            <p className="font-medium mb-3">{item.title}</p>
            <div className="mb-3 flex gap-3">
              <strong className="text-2xl text-green-700">
                {item.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL"
                })}
                </strong>
              <button 
              onClick={() => pushItemCart(item) }
              className="bg-zinc-900 p1 rounded cursor-pointer ">
                <BsCartPlus size={20} color="#FFF" />
              </button>
            </div>
          </section>
          ))}
        </div>
      </main>
    </div>
  );
}
