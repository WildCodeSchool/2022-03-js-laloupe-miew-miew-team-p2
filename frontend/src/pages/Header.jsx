/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
import "./sass/header.scss";
import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import IconCat from "../assets/chat.png";
import IconContact from "../assets/email.png";
import IconBook from "../assets/livre-ouvert.png";
import Burger from "../assets/burger-bar.png";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [phoneDisplay, setPhoneDisplay] = useState(true);

  return (
    <nav className="navigation">
      <div
        // className="circle-white"
        onClick={() => setPhoneDisplay(!phoneDisplay)}
        className={
          phoneDisplay
            ? "circle-white phoneAppear"
            : "circle-white phoneDisappear"
        }
      >
        <div className="point">
          <img src={Burger} alt="Burger icon" className="resize-burger" />
        </div>
      </div>
      <NavLink to={`${import.meta.env.BASE_URL}/`}>
        <h1>CAT FIGHT</h1>
      </NavLink>
      <NavLink to={`${import.meta.env.BASE_URL}`} className="navigation--title">
        Home
      </NavLink>
      <NavLink
        to={`${import.meta.env.BASE_URL}content/fightpage`}
        className={
          location.pathname === "/content/fightpage"
            ? "navigation--title active"
            : "navigation--title"
        }
      >
        Fight
      </NavLink>
      <NavLink
        to={`${import.meta.env.BASE_URL}content/meow`}
        className={
          location.pathname === "/content/meow"
            ? "navigation--title active"
            : "navigation--title"
        }
      >
        Meow Who
      </NavLink>
      <NavLink
        to={`${import.meta.env.BASE_URL}content/contact`}
        className={
          location.pathname === "/content/contact"
            ? "navigation--title active"
            : "navigation--title"
        }
      >
        Contact
      </NavLink>
      <div
        // className="phone"
        // style={{ display: phoneDisplay ? "flex" : "none" }}
        className={phoneDisplay ? "phone phoneDisappear" : "phone phoneAppear"}
      >
        <input
          className="my-input--header"
          type="radio"
          name="s"
          id="s1"
          onChange={() => {
            setTimeout(() => setPhoneDisplay(true), 1000);
            navigate(`${import.meta.env.BASE_URL}content/meow`);
          }}
          checked={location.pathname === "/content/meow" ? "checked" : null}
        />
        <input
          className="my-input--header"
          type="radio"
          name="s"
          id="s2"
          onChange={() => {
            setTimeout(() => setPhoneDisplay(true), 1000);
            navigate(`${import.meta.env.BASE_URL}content/fightpage`);
          }}
          checked={
            location.pathname === "/content/fightpage" ? "checked" : null
          }
        />
        <input
          className="my-input--header"
          type="radio"
          name="s"
          id="s3"
          onChange={() => {
            setTimeout(() => setPhoneDisplay(true), 1000);
            navigate(`${import.meta.env.BASE_URL}content/contact`);
          }}
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
