/* eslint-disable no-shadow */
import { useEffect, useState } from "react";
import axios from "axios";
// eslint-disable-next-line import/no-unresolved
import Select from "../components/fightpage-components/mode/Select";
import Battle from "../components/fightpage-components/mode/Battle";
import Result from "../components/fightpage-components/mode/Result";
import CustomSelect from "../components/fightpage-components/mode/CustomSelect";

const FightPage = () => {
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const [mode, setMode] = useState("Select");
  const [apiCat, setApiCat] = useState([]);
  const [customCat, setCustomCat] = useState(
    JSON.parse(localStorage.getItem("customCat")) || []
  );
  const [cat, setCat] = useState(null);
  const [enemyCat, setEnemyCat] = useState([]);
  const laPoule = [
    {
      name: "La Poule",
      image_link:
        "https://www.poulesenville.com/wp-content/uploads/2020/04/img-0549.jpeg",
      other_pets_friendly: 6,
      intelligence: 7,
      min_weight: 20,
      max_weight: 30,
      max_life_expectancy: 2000,
      min_life_expectancy: 25,
      playfulness: 6,
    },
  ];
  const getCat = () => {
    axios
      .get("https://api.api-ninjas.com/v1/cats?min_weight=17", {
        headers: {
          "X-Api-Key": "nwEVbvsWgm1qxCZDGw8C6Q==qqvbZCxpZQd2jsjq",
        },
      })
      .then((response) => response.data)
      .then((data) => {
        setApiCat(data);
        setEnemyCat(data);
      });
  };

  useEffect(() => {
    getCat();
    setCustomCat(JSON.parse(localStorage.getItem("customCat")) || []);
  }, []);

  useEffect(() => {
    laPoule.map((poule) => enemyCat.push(poule));
  }, [enemyCat]);

  const [number, setNumber] = useState(0);
  const rdmNumber = getRandomNumber(0, 16);
  const [isSelected, setIsSelected] = useState(false);
  const [winner, setWinner] = useState(undefined);
  return (
    <div className="fight-container">
      {mode === "Select" && (
        <Select
          apiCat={apiCat}
          setApiCat={setApiCat}
          cat={cat}
          setCat={setCat}
          number={number}
          setNumber={setNumber}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          setMode={setMode}
          onStartClick={() => setMode("Battle")}
        />
      )}
      {mode === "CustomSelect" && (
        <CustomSelect
          customCat={customCat}
          cat={cat}
          setCat={setCat}
          number={number}
          setNumber={setNumber}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          setMode={setMode}
          setCustomCat={setCustomCat}
          onStartClick={() => setMode("Battle")}
        />
      )}
      {mode === "Battle" && (
        <Battle
          enemyCat={enemyCat}
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
