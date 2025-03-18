import { Link } from "react-router-dom";
import { useContext } from "react";
import {cartContext} from '../../contexts'


import { FiShoppingCart } from "react-icons/fi";

export function Header() {
  const {cartamount} = useContext(cartContext)
  
  return (
    <header className="w-full px-1 bg-emerald-50">
      <nav className="w-full max-w-7xl h-18 flex items-center justify-between px-5 mx-auto">
        <Link className="font-bold text-3xl" to="/">
          PetSHop-DEV
        </Link>
        <Link className="relative" to="/cart">
        <FiShoppingCart size={30} color="#121212"/>
        {cartamount > 0 && (
          <span className="absolute -right-3 -top-3 px-3.5 bg-sky-500 rounded-full w-6 h-6 flex justify-center items-center text-white text-xs">
          {cartamount}
        </span>
        )}
        </Link>
      </nav>
    </header>
  );
}
