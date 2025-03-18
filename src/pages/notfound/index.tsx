import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 mt-40">
      <h1 className="text-6xl font-medium">404</h1>
      <p className="text-2xl font-medium">Página não encotrada...</p>
      <Link to="/">
        <button className="w-70 p-2 rounded-2xl text-white font-medium mt-3 cursor-pointer bg-blue-600 transition delay-150 duration-300 ease-in-out hover:scale-105">
          Voltar ao inicio
        </button>
      </Link>
    </div>
  );
}
