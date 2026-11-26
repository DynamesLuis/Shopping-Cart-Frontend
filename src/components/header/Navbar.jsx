import { NavLink } from "react-router";
import { getNavLinkClass } from "../../utils/uiUtils";

export default function Navbar() {
  return (
    <nav className="flex flex-col gap-4 py-4 text-slate-700 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:flex-row md:gap-5 md:py-0">
      <NavLink to={"/"} className={getNavLinkClass}>
        Home
      </NavLink>
      <NavLink to={"/shop"} className={getNavLinkClass}>
        Shop
      </NavLink>
    </nav>
  );
}
