import "./sass/header.scss";
import { NavLink } from "react-router-dom";
// import logo from "@assets/griffe.png";
export default function Header() {
  return (
    <nav className="navigation">
      <NavLink to="/" className="navigation--title">
        Home
      </NavLink>
    </nav>
  );
}
