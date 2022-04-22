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
      window.removeEventListener("scroll", () => {
        scrollFunction();
      });
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
      <NavLink to="/content/fightpage" className="navigation--title">
        Fight
      </NavLink>
      <NavLink to="/content/meow" className="navigation--title">
        Meow Who ?
      </NavLink>
      <NavLink to="/content/contact" className="navigation--title">
        Contact
      </NavLink>
      <div
        // className="phone"
        // style={{ display: phoneDisplay ? "flex" : "none" }}
        className={phoneDisplay ? "phone phoneAppear" : "phone phoneDisappear"}
        onScroll={scrollFunction}
      >
        <input
          type="radio"
          name="s"
          id="s1"
          onChange={() => navigate("/content/meow")}
          checked={location.pathname === "/content/meow" ? "checked" : null}
        />
        <input
          type="radio"
          name="s"
          id="s2"
          onChange={() => navigate("/content/fightpage")}
          checked={
            location.pathname === "/content/fightpage" ? "checked" : null
          }
        />
        <input
          type="radio"
          name="s"
          id="s3"
          onChange={() => navigate("/content/contact")}
          checked={location.pathname === "/content/contact" ? "checked" : null}
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