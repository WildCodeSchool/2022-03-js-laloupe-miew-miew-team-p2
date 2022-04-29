import "../pages/sass/loader.scss";
import Load from "../assets/loader.gif";

export default function Loader() {
  return (
    <div>
      <section className="loader--container">
        <img src={Load} alt="Loader" className="loader-size" />
        <p>Developped by</p>
        <p>Meow Team</p>
      </section>
    </div>
  );
}
