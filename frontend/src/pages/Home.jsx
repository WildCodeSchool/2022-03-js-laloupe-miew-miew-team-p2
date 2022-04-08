import "./sass/home.scss";
// eslint-disable-next-line import/no-unresolved
import logo from "@assets/griffe.png";

export default function Home() {
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
            <div className="muzzle" />
          </div>
        </div>
      </div>
      <div className="fight-meow">
        <div className="keypress fight-button">Fight Meow</div>
      </div>
    </header>
  );
}
