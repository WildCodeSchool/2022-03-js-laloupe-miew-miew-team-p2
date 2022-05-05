/* eslint-disable no-shadow */
import { useEffect, useState } from "react";
import axios from "axios";
import Select from "../components/fightpage-components/mode/Select";
import Battle from "../components/fightpage-components/mode/Battle";
import Result from "../components/fightpage-components/mode/Result";
// import wait from "../components/fightpage-components/components/waitFunction";

const FightPage = () => {
  const [mode, setMode] = useState("Select");
  const [cat, setCat] = useState(null);
  // const [customCat, setCustomCat] = [];
  const [isApiCat, setIsApiCat] = useState(true);
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

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

  //  Add Cat //
  // const [newCatName, setNewCatName] = useState("");
  // const [newImageLink, setNewImageLink] = useState("");
  // const newCat = useState([]);
  // const newestCat = {
  //   name: newCatName,
  //   image_link: newImageLink,
  //   other_pets_friendly: getRandomNumber(4, 5),
  //   intelligence: getRandomNumber(4, 5),
  //   min_weight: getRandomNumber(7, 15),
  //   max_weight: getRandomNumber(17, 30),
  //   min_life_expectancy: getRandomNumber(9, 17),
  //   max_life_expectancy: getRandomNumber(14, 20),
  //   playfullness: getRandomNumber(3, 5),
  // };
  // const createCat = () => {
  //   axios
  //     .get("https://api.thecatapi.com/v1/images/search")
  //     .then((response) => response.data)
  //     .then((data) => setNewImageLink(data[0].url));
  // };
  // const addCat = () => {
  //   newCat.push(newestCat);
  //   setCustomCat(newCat);
  // };
  // end Add cat //

  useEffect(() => {
    getCat();
  }, []);

  const [number, setNumber] = useState(0);
  const rdmNumber = getRandomNumber(0, 15);
  const [isSelected, setIsSelected] = useState(false);
  const [winner, setWinner] = useState(undefined);
  return (
    <div className="fight-container">
      {mode === "Select" && (
        <Select
          cat={cat}
          // addCat={addCat}
          // createCat={createCat}
          // customCat={customCat}
          isApiCat={isApiCat}
          setIsApiCat={setIsApiCat}
          // newCatName={newCatName}
          // setNewCatName={setNewCatName}
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
          cat={cat}
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
