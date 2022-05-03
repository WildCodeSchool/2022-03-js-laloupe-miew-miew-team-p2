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
      .get("https://api.api-ninjas.com/v1/cats?children_friendly=5", {
        headers: {
          "X-Api-Key": "EeDQiPwn2Dx8mH16Xzs44Q==Qd2I6TdRSwScySwH",
        },
      })
      .then((response) => response.data)
      .then((data) => {
        cats.push(...data);
        axios
          .get("https://api.api-ninjas.com/v1/cats?family_friendly=5", {
            headers: {
              "X-Api-Key": "EeDQiPwn2Dx8mH16Xzs44Q==Qd2I6TdRSwScySwH",
            },
          })
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

  return (
    <div className="meowwho-page">
      <h1 className="title-meow-page">Bienvenue sur Meow-page</h1>
      <h2 className="sous-title-meow-page">
        Découvrez nos chats selon leurs critères
      </h2>
      <div className="search">
        <h3>Search by Name : </h3>
        <input
          type="text"
          id="name-filter"
          value={filter}
          name="name"
          placeholder="Write here the name of a cat"
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <section className="cards">
        {filter === "" &&
          arrayCat.map((cat) => {
            return <CatsCard key={cat.name} cat={cat} />;
          })}
        {filter !== "" &&
          arrayCat
            .filter((cat) =>
              cat.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map((cat) => {
              return <CatsCard key={cat.name} cat={cat} />;
            })}
      </section>
    </div>
  );
}
