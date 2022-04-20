import "./sass/header.scss";
import { NavLink } from "react-router-dom";
// import logo from "@assets/griffe.png";
export default function Header() {
  return (
    <nav className="navigation">
      <NavLink to="/" className="navigation--title">
        Home
      </NavLink>
      <NavLink to="/fightpage" className="navigation--title">
        Fight
      </NavLink>
      <NavLink to="undefined" className="navigation--title">
        Meow Who ?
      </NavLink>
      <NavLink to="undefined" className="navigation--title">
        Contact
      </NavLink>
    </nav>
  );
}
