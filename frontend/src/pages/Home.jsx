/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import "./sass/home.scss";
import { NavLink } from "react-router-dom";
// eslint-disable-next-line import/no-unresolved
import logo from "@assets/griffe.png";

export default function Home() {
  const devTeam = () => {
    console.error("Developed by the Meow Team of the Wild Code School");
  };
  return (
    <header>
      <div className="title">
        <h1>CAT FIGHT</h1>
        <img src={logo} alt="Griffe de chat" className="picture--size" />
      </div>
      <div className="cat-placement">
        <div className="cat">
          <div className="ear ear--left" />
          <div className="ear ear--right" />
          <div className="face">
            <div className="eye eye--left">
              <div className="eye-pupil" />
            </div>
            <div className="eye eye--right">
              <div className="eye-pupil" />
            </div>
            <div className="muzzle" onClick={() => devTeam()} />
          </div>
        </div>
      </div>
      <div className="fight-meow">
        <NavLink to="/" className="fight-button">
          Fight Meow
        </NavLink>
      </div>
    </header>
  );
}
