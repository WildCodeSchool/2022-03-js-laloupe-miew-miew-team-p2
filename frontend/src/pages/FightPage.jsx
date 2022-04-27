/* eslint-disable no-shadow */
import { useEffect, useState } from "react";
import axios from "axios";
import "./sass/fightpage.scss";
import Select from "../components/fightpage-components/mode/Select";
import Battle from "../components/fightpage-components/mode/Battle";
import Result from "../components/fightpage-components/mode/Result";

const FightPage = () => {
  const [mode, setMode] = useState("Select");
  const [cat, setCat] = useState([]);
  const getCat = () => {
    axios
      .get("https://api.api-ninjas.com/v1/cats?min_weight=17", {
        headers: {
          "X-Api-Key": "nwEVbvsWgm1qxCZDGw8C6Q==qqvbZCxpZQd2jsjq",
        },
      })
      .then((response) => response.data)
      .then((data) => setCat(data));
  };

  useEffect(() => {
    getCat();
  }, []);

  const [number, setNumber] = useState(0);
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const rdmNumber = getRandomNumber(0, 15);
  const [isSelected, setIsSelected] = useState(false);
  const [winner, setWinner] = useState(undefined);
  return (
    <div className="fight-container">
      {mode === "Select" && (
        <Select
          cat={cat}
          number={number}
          setNumber={setNumber}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          onStartClick={() => setMode("Battle")}
        />
      )}
      {mode === "Battle" && (
        <Battle
          cat={cat}
          number={number}
          rdmNumber={rdmNumber}
          onResultClick={() => setMode("Result")}
          onResult={(winner) => {
            setWinner(winner);
            setMode("Result");
          }}
        />
      )}
      {mode === "Result" && (
        <Result
          winner={winner}
          onSelectClick={() => {
            setWinner(undefined);
            setMode("Select");
            setIsSelected(false);
          }}
        />
      )}
    </div>
  );
};

export default FightPage;
