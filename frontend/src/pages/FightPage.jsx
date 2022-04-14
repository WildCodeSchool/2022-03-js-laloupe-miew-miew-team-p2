import { useEffect, useState } from "react";
import axios from "axios";
// eslint-disable-next-line import/no-unresolved
import OpponentCat from "@components/OpponentCat";
// eslint-disable-next-line import/no-unresolved
import UserCat from "@components/UserCat";
import SelectButton from "@components/SelectButton";

const FightPage = () => {
  const [cat, setCat] = useState(null);
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

  const [isSelected, setIsSelected] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  return (
    <div>
      <UserCat
        cat={cat}
        number={number}
        setNumber={setNumber}
        isSelected={isSelected}
      />
      {isStarted ? (
        <SelectButton isSelected={isSelected} setIsSelected={setIsSelected} />
      ) : null}
      {isSelected ? (
        <button type="button" onClick={() => setIsStarted(true)}>
          Start Fight !
        </button>
      ) : null}
      {isSelected ? <OpponentCat cat={cat} /> : null}
    </div>
  );
};

export default FightPage;
