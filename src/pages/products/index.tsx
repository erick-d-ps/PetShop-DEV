import { Link, useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { cartContext } from '../../contexts'
import { ProdutoProps } from "../home";
import { api } from "../../services/api";
import { toast } from 'react-hot-toast'



export function Products() {
    const { addItemcart } = useContext(cartContext)
    const { id } = useParams();

    const [produto, setProduto] = useState<ProdutoProps>();

    useEffect(() => {
        async function getProduto() {
          const response = await api.get(`/products/${id}`)  
          setProduto(response.data)
        }
        getProduto();
    }, [id])

    function adicioneCart(produto: ProdutoProps){
        toast.success("Produto adicionado no carrinho")
        addItemcart(produto)
    }


  return (
   <div>
    {produto &&(
         <main className="w-full max-w-7xl px-4 mx-auto">
         <section key={produto.id} className="flex flex-col md:flex-row mt-10 gap-4">
           <div className="">
               <img 
               src={produto.cover} 
               alt={produto.title} />
           </div>
           <div className="flex flex-col max-w-2xl gap-4">
               <p className="font-bold text-2xl">{produto.title}</p>
               <span>{produto.description}</span>
               <strong className="text-emerald-800 font-bold text-3xl">{produto.price.toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</strong>
               <Link to="/cart">
               <button 
               onClick={() => adicioneCart(produto)}
               className="w-70 p-2 rounded-2xl text-white font-medium mt-3 cursor-pointer bg-blue-600 transition duration-300 ease-in-out hover:scale-105">
                    Adicionar ao carrinho 
               </button>
               </Link>
           </div>
         </section>
       </main>
    )}
   </div>
  );
}
