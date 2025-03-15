import { RiDeleteBin6Line } from "react-icons/ri";

export function Cart() {
  return (
    <main className="w-full max-w-7xl px-2 mx-auto">
      <h1 className="flex font-bold text-2xl items-center justify-center mt-4 mb-5">
        Meu carrinho
      </h1>
      <div className="flex flex-col md:flex-row justify-between">
        <section>
          <div className="flex max-w-150 min-h-60 gap-4 border-2 border-neutral-300 p-2 mt-5">
            <img
              className="w-100 h-50"
              src="https://down-br.img.susercontent.com/file/br-11134207-7r98o-lwzttc18645uab"
              alt="logo da imagem"
            />
            <div className="flex flex-col gap-2">
              <p>
                Arranhador Para Gato Parede Sisal 50x20 Grande Brinquedo Pet
              </p>
              <strong className="text-emerald-900 text-2xl">R$ 50.00</strong>
              <div className="flex gap-2">
                <button className="bg-slate-600 px-2 rounded text-white font-medium flex  items-center justify-center">
                  -
                </button>
                1
                <button className="bg-slate-600 px-2 rounded text-white font-medium flex  items-center justify-center">
                  +
                </button>
              </div>
              <div className="flex justify-between">
                <strong className="text-2xl">total: R$ 50.00</strong>
                <button className="cursor-pointer">
                  <RiDeleteBin6Line size={23} color="#000000" />
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="mt-5 shadow rounded-mb items-center p-3 flek flex-col w-ful bg-[#f5f5f5] border-gray-300 ">
          <div className="flex items-center justify-center border-b-2 border-gray-200 pb-4 mb-5">
            <h1 className="text-2xl font-medium">Detalhes da compra</h1>
          </div>
          <div className="flex items-center justify-between border-b-2 border-gray-200 pb-4 mb-5">
            <p className="font-bold">Itens:</p>
            <strong>2</strong>
          </div>
          <div className="flex items-center justify-between border-b-2 border-gray-200 pb-4 mb-5">
            <p className="font-bold">Total:</p>
            <strong>R$ 100,00</strong>
          </div>
          <div className="flex items-center justify-between border-b-2 border-gray-200 pb-4 mb-5">
            <p className="font-bold">Frete:</p>
            <strong>R$ 28,00</strong>
          </div>
          <div className="flex items-center justify-between border-b-2 border-gray-200 pb-4 mb-5">
            <p className="font-bold">Total com frete:</p>
            <strong>R$ 128,00</strong>
          </div>
          <button className="w-full rounded-2xl h-10 bg-emerald-700 py-3 px-3 flex items-center justify-center text-white transition delay-150 duration-300 ease-in-out hover:scale-103">
            Finazar pedido
          </button>
        </div>
      </div>
    </main>
  );
}
