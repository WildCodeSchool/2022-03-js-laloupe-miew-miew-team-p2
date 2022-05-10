/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
import CatsCard from "@components/CatsCard";
import { useState, useEffect } from "react";

import axios from "axios";
import "./Meow-who.css";

export default function MeowWho() {
  const [arrayCat, setArrayCat] = useState([]);
  function getArrayCat() {
    const cats = [];
    axios
      .get("https://api.api-ninjas.com/v1/cats?family_friendly=5", {
        headers: {
          "X-Api-Key": "EeDQiPwn2Dx8mH16Xzs44Q==Qd2I6TdRSwScySwH",
        },
      })
      .then((response) => response.data)
      .then((data) => {
        cats.push(...data);
        axios
          .get(
            "https://api.api-ninjas.com/v1/cats?family_friendly=5&offset=20",
            {
              headers: {
                "X-Api-Key": "EeDQiPwn2Dx8mH16Xzs44Q==Qd2I6TdRSwScySwH",
              },
            }
          )
          .then((response) => response.data)
          .then((data1) => {
            cats.push(...data1);

            setArrayCat(cats);
          });
      });
  }
  useEffect(() => {
    getArrayCat();
  }, []);
  const [filter, setFilter] = useState("");
  const [mode, setMode] = useState("");

  useEffect(() => {
    if (filter === "") {
      setMode("");
    } else {
      setMode("name");
    }
  }, [filter]);

  return (
    <div className="meowwho-page">
      <h2 className="sous-title-meow-page">
        Discover our cats according to their characteristics
      </h2>
      <div className="search">
        <h2 className="search-title">Search by Name : </h2>
        <input
          type="text"
          id="name-filter"
          value={filter}
          name="name"
          placeholder="Write here the name of a cat"
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <div className="filter-buttons-container">
        <button
          className={
            mode === "max-weight" ? "button-filter-active3" : "button-filter"
          }
          type="button"
          onClick={() => {
            setMode(mode !== "max-weight" ? "max-weight" : "");
          }}
        >
          FATTEST
        </button>
        <button
          className={
            mode === "playfulness" ? "button-filter-active2" : "button-filter"
          }
          type="button"
          onClick={() => {
            setMode(mode !== "playfulness" ? "playfulness" : "");
          }}
        >
          PLAYFULLNESS
        </button>
        <button
          className={
            mode === "children-friendly"
              ? "button-filter-active"
              : "button-filter"
          }
          type="button"
          onClick={() => {
            setMode(mode !== "children-friendly" ? "children-friendly" : "");
          }}
        >
          CHILDREN-FRIENDLY
        </button>
      </div>

      <section className="cards">
        {mode === "" &&
          arrayCat.map((cat) => {
            return <CatsCard key={cat.name} cat={cat} />;
          })}
        {mode === "name" &&
          arrayCat
            .filter((cat) =>
              cat.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map((cat) => {
              return <CatsCard key={cat.name} cat={cat} />;
            })}

        {mode === "max-weight" &&
          arrayCat
            .filter((cat) => cat.max_weight > 15)
            .map((cat) => {
              return <CatsCard key={cat.name} cat={cat} />;
            })}

        {mode === "playfulness" &&
          arrayCat
            .filter((cat) => cat.playfulness === 5)
            .map((cat) => {
              return <CatsCard key={cat.name} cat={cat} />;
            })}

        {mode === "children-friendly" &&
          arrayCat
            .filter((cat) => cat.children_friendly === 4)
            .map((cat) => {
              return <CatsCard key={cat.name} cat={cat} />;
            })}
      </section>
    </div>
  );
}
