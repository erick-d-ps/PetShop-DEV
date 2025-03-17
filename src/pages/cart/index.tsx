import { RiDeleteBin6Line } from "react-icons/ri";
import { cartContext } from "../../contexts";
import { useContext } from "react";
import { Link } from "react-router-dom";

export function Cart() {
  const {
    cart,
    FinalizeOrder,
    RemuvItemCart,
    addItemcart,
    total,
    totalFrete,
    excuirItem,
    cartamount
  } = useContext(cartContext);

  return (
    <main className="w-full max-w-7xl px-2 mx-auto">
      <h1 className="flex font-bold text-2xl items-center justify-center mt-4 mb-5">
        Meu carrinho
      </h1>
      {cart.length === 0 && (
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Carinho esta fazio...</h1>
          <Link to="/">
            <button className="w-70 p-2 rounded-2xl text-white font-medium mt-3 cursor-pointer bg-blue-600 transition delay-150 duration-300 ease-in-out hover:scale-105">
              Veja os produtos mais vendidos
            </button>
          </Link>
        </div>
      )}
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          {cart.map((item) => (
            <section key={item.id}>
              <div className="flex max-w-150 min-h-60 gap-4 border-2 border-neutral-300 p-2 mt-5">
                <img className="w-100 h-60" src={item.cover} alt={item.title} />
                <div className="flex flex-col gap-5">
                  <p className="font-medium">{item.title}</p>
                  <strong className="text-emerald-900 text-2xl">
                    {item.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </strong>
                  <div className="flex gap-2">
                    <button
                      onClick={() => RemuvItemCart(item)}
                      className="bg-slate-600 px-2 rounded text-white font-medium flex  items-center justify-center"
                    >
                      -
                    </button>
                    {item.amount}
                    <button
                      onClick={() => addItemcart(item)}
                      className="bg-slate-600 px-2 rounded text-white font-medium flex  items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                  <div className="flex justify-between">
                    <strong className="text-2xl">
                      total:{" "}
                      {item.total.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </strong>
                    <button 
                    onClick={() => excuirItem(item)}
                    className="cursor-pointer">
                      <RiDeleteBin6Line size={23} color="#000000" />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
        {cart.length !== 0 && (
          <div className="  mt-5 shadow rounded-mb items-center p-3 flek flex-col w-ful max-h-100 bg-[#f5f5f5] border-gray-300 ">
            <div className="flex items-center justify-center border-b-2 border-gray-200 pb-4 mb-5">
              <h1 className="text-2xl font-medium">Detalhes da compra</h1>
            </div>
            <div className="flex items-center justify-between border-b-2 border-gray-200 pb-4 mb-5">
              <p className="font-bold">Itens:</p>
              <strong>{cartamount}</strong>
            </div>
            <div className="flex items-center justify-between border-b-2 border-gray-200 pb-4 mb-5">
              <p className="font-bold">Total:</p>
              <strong>{total}</strong>
            </div>
            <div className="flex items-center justify-between border-b-2 border-gray-200 pb-4 mb-5">
              <p className="font-bold">Frete:</p>
              <strong>R$ 70,00</strong>
            </div>
            <div className="flex items-center justify-between border-b-2 border-gray-200 pb-4 mb-5">
              <p className="font-bold">Total com frete:</p>
              <strong>{totalFrete}</strong>
            </div>
           <Link to='/'>
           <button
              onClick={() => FinalizeOrder()}
              className="w-full rounded-2xl h-10 bg-emerald-700 py-3 px-3 flex items-center justify-center text-white transition delay-150 duration-300 ease-in-out hover:scale-103"
            >
              Finazar pedido
            </button>
           </Link>
          </div>
        )}
      </div>
    </main>
  );
}
