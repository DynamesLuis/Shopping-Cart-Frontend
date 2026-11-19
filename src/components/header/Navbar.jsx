import { NavLink } from "react-router";
import { getNavLinkClass } from "../../utils/uiUtils";

export default function Navbar() {
  return (
    <nav className="flex gap-5 text-slate-700 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <NavLink to={"/"} className={getNavLinkClass}>
        Home
      </NavLink>
      <NavLink to={"/shop"} className={getNavLinkClass}>
        Shop
      </NavLink>
    </nav>
  );
}
