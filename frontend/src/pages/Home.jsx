/* eslint-disable no-undef */
/* eslint-disable no-else-return */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import "./sass/home.scss";
import { NavLink } from "react-router-dom";
import logo from "../assets/griffe.png";

export default function Home() {
  // const audio = new Audio("https://www.mboxdrive.com/roar.mp3");
  const audio = new Audio(
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/menuclick.wav"
  );
  const start = () => {
    audio.play();
  };
  const devTeam = () => {
    alert("Developed by the Meow Team of the Wild Code School");
  };

  return (
    <header>
      <div id="text" className="title">
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
        <NavLink
          to="/content/fightpage"
          className="fight-button"
          onClick={start}
        >
          Fight Meow
        </NavLink>
      </div>
    </header>
  );
}
