/* eslint-disable jsx-a11y/label-has-associated-control */
import "./sass/header.scss";
import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/griffe.png";
import IconCat from "../assets/chat.png";
import IconContact from "../assets/email.png";
import IconBook from "../assets/livre-ouvert.png";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [phoneDisplay, setPhoneDisplay] = useState(true);

  let scrollPosition = window.scrollY;

  const scrollFunction = () => {
    const newScrollPosition = window.scrollY;

    if (newScrollPosition < scrollPosition) {
      setPhoneDisplay(true);
    } else {
      setPhoneDisplay(false);
    }
    scrollPosition = newScrollPosition;
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      scrollFunction();
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <nav className="navigation">
      <NavLink to="/">
        {" "}
        <img src={Logo} alt="Logo of our website" className="resize--logo" />
      </NavLink>
      <NavLink to="/" className="navigation--title">
        Home
      </NavLink>
      <NavLink to="/fightpage" className="navigation--title">
        Fight
      </NavLink>
      <NavLink to="/meow" className="navigation--title">
        Meow Who ?
      </NavLink>
      <NavLink to="/contact" className="navigation--title">
        Contact
      </NavLink>
      <div
        className="phone"
        style={{ display: phoneDisplay ? "block" : "none" }}
        onScroll={scrollFunction}
      >
        <input
          type="radio"
          name="s"
          id="s1"
          onChange={() => navigate("/meow")}
          checked={location.pathname === "/meow" ? "checked" : null}
        />
        <input
          type="radio"
          name="s"
          id="s2"
          onChange={() => navigate("/fightpage")}
          checked={location.pathname === "/fightpage" ? "checked" : null}
        />
        <input
          type="radio"
          name="s"
          id="s3"
          onChange={() => navigate("/contact")}
          checked={location.pathname === "/contact" ? "checked" : null}
        />
        <label htmlFor="s1">
          <img src={IconBook} alt="Icon Book" />
        </label>
        <label htmlFor="s2">
          <img src={IconCat} alt="Icon Cat" />
        </label>
        <label htmlFor="s3">
          <img src={IconContact} alt="Icon Contact" />
        </label>
        <div className="circle" />
        <div className="phone_content">
          <div className="phone_bottom">
            <span className="indicator" />
          </div>
        </div>
      </div>
    </nav>
  );
}
