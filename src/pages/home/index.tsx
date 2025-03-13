import { BsCartPlus } from "react-icons/bs";

export function Home() {
  return (
    <div>
      <main className="w-full max-w-7xl px-4 mx-auto">
        <h1 className="flex justify-center items-center mt-10 mb-4 text-3xl font-medium  ">
          Produtos mais vendidos
        </h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          <section className="p-1 w-full border border-neutral-100  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-neutral-500 ">
            <img
              src="https://images.tcdn.com.br/img/img_prod/1261870/180_racao_golden_formula_para_adultos_carne_e_arroz_15_kg_1703_1_9069e769462b78b9c38382c3fca69e22.jpg"
              alt="logo da imagem"
            />
            <p className="font-medium mb-3">Goldem formula</p>
            <div className="mb-3 flex gap-3">
              <strong className="text-2xl text-green-700">R$ 250,00 </strong>
              <button className="bg-zinc-900 p1 rounded cursor-pointer ">
                <BsCartPlus size={25} color="#FFF" />
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
