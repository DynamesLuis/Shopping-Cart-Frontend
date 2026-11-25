import { NavLink } from "react-router";
import { useCart } from "../../context/CartContext";

export default function Options() {
  const { totalItems } = useCart();

  return (
    <div className="flex items-center gap-5">
      
      <NavLink
        to={"/cart"}
        className={({ isActive }) =>
          `relative flex items-center justify-center w-10 h-10 rounded-full transition-colors transition-all duration-300 ease
           ${isActive ? "bg-black text-white hover:bg-black" : "hover:bg-gray-200"}`
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M15 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M17 17h-11v-14h-2" />
          <path d="M6 5l14 1l-1 7h-13" />
        </svg>

        <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-5 h-5 px-1 rounded-full bg-black text-white text-xs font-bold">
          {totalItems}
        </span>
      </NavLink>

      <button className="cursor-pointer w-25 border-solid border-2 border-slate-500 rounded-full py-2 px-3 hover:bg-black hover:text-white hover:border-black transition-all duration-300 ease">
        Log In
      </button>
    </div>
  );
}
