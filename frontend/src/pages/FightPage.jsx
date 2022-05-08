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

  // Add Cat //
  const [newCatName, setNewCatName] = useState("");
  const [newImageLink, setNewImageLink] = useState("");
  const newCat = [
    {
      name: newCatName,
      image_link: newImageLink,
      other_pets_friendly: getRandomNumber(4, 5),
      intelligence: getRandomNumber(4, 5),
      min_weight: getRandomNumber(7, 15),
      max_weight: getRandomNumber(17, 30),
      min_life_expectancy: getRandomNumber(9, 17),
      max_life_expectancy: getRandomNumber(14, 20),
      playfulness: getRandomNumber(3, 5),
    },
  ];
  const createCat = () => {
    if (newCatName !== "" && newImageLink !== "") {
      newCat.map((cat) => customCat.push(cat));
      setNewImageLink("");
      setNewCatName("");
      localStorage.setItem("customCat", JSON.stringify(customCat));
    }
  };

  useEffect(() => {
    getCat();
    setCustomCat(JSON.parse(localStorage.getItem("customCat")) || []);
  }, []);

  const [number, setNumber] = useState(0);
  const rdmNumber = getRandomNumber(0, 15);
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
          createCat={createCat}
          cat={cat}
          setCat={setCat}
          number={number}
          setNumber={setNumber}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          setMode={setMode}
          onStartClick={() => setMode("Battle")}
          newCatName={newCatName}
          setNewCatName={setNewCatName}
          newImageLink={newImageLink}
          setNewImageLink={setNewImageLink}
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
