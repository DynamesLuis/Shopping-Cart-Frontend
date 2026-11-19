import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/shop"}>Shop</NavLink>
        </li>
        <li>
          <NavLink to={"/cart"}>Cart</NavLink>
        </li>
      </ul>
    </nav>
  );
}
