import { useEffect, useState } from "react";
import UserCat from "../components/UserCat";
import "../../../pages/sass/fightpage-css/select.scss";

const CustomSelect = ({
  cat,
  number,
  setNumber,
  isSelected,
  setIsSelected,
  onStartClick,
  customCat,
  setCat,
  setMode,
}) => {
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const nextCat = () => {
    setNumber(number === cat.length - 1 ? 0 : number + 1);
  };

  const prevCat = () => {
    setNumber(number === 0 ? cat.length - 1 : number - 1);
  };

  // Add Cat //
  const [newCatName, setNewCatName] = useState("");
  const [newImageLink, setNewImageLink] = useState("");
  const maxPoint = 66;
  const [attack, setAttack] = useState(3);
  const [magic, setMagic] = useState(3);
  const [defenseMin, setDefenseMin] = useState(7);
  const [defenseMax, setDefenseMax] = useState(17);
  const [healthPoint, setHealthPoint] = useState(14);
  const pointLeft =
    maxPoint - attack - magic - defenseMin - defenseMax - healthPoint;
  const newCat = [
    {
      name: newCatName,
      image_link: newImageLink,
      other_pets_friendly: attack,
      intelligence: magic,
      min_weight: defenseMin,
      max_weight: defenseMax,
      max_life_expectancy: healthPoint,
      // other_pets_friendly: getRandomNumber(4, 5),
      // intelligence: getRandomNumber(4, 5),
      // min_weight: getRandomNumber(7, 15),
      // max_weight: getRandomNumber(17, 30),
      // max_life_expectancy: getRandomNumber(14, 20),
      min_life_expectancy: getRandomNumber(9, 17),
      playfulness: getRandomNumber(3, 5),
    },
  ];
  const reduceAttack = () => {
    if (attack > 3) {
      setAttack(attack - 1);
    }
  };
  const increaseAttack = () => {
    if (pointLeft > 0 && attack < 5) {
      setAttack(attack + 1);
    }
  };
  const reduceMagic = () => {
    if (magic > 3) {
      setMagic(magic - 1);
    }
  };
  const increaseMagic = () => {
    if (pointLeft > 0 && magic < 5) {
      setMagic(magic + 1);
    }
  };
  const reduceDefenseMin = () => {
    if (defenseMin > 7) {
      setDefenseMin(defenseMin - 1);
    }
  };
  const increaseDefenseMin = () => {
    if (pointLeft > 0 && defenseMin < 15) {
      setDefenseMin(defenseMin + 1);
    }
  };
  const reduceDefenseMax = () => {
    if (defenseMax > 17) {
      setDefenseMax(defenseMax - 1);
    }
  };
  const increaseDefenseMax = () => {
    if (pointLeft > 0 && defenseMax < 30) {
      setDefenseMax(defenseMax + 1);
    }
  };
  const reduceHealthPoint = () => {
    if (healthPoint > 14) {
      setHealthPoint(healthPoint - 1);
    }
  };
  const increaseHealthPoint = () => {
    if (pointLeft > 0 && healthPoint < 20) {
      setHealthPoint(healthPoint + 1);
    }
  };
  const createCat = () => {
    if (newCatName !== "" && newImageLink !== "" && pointLeft === 0) {
      newCat.map((cats) => customCat.push(cats));
      setNewImageLink("");
      setNewCatName("");
      localStorage.setItem("customCat", JSON.stringify(customCat));
    }
  };

  useEffect(() => {
    setCat(customCat);
  }, [customCat]);

  return (
    cat && (
      <div className="select">
        <h1 className="user-cat-title">Choose your Cat :</h1>
        <div className="slider">
          {cat.map((catSlide, index) => (
            <UserCat
              number={number}
              key={catSlide.name}
              catSlide={catSlide}
              index={index}
              isSelected={isSelected}
              prevCat={prevCat}
              nextCat={nextCat}
            />
          ))}
        </div>
        <div className="isselected-container">
          <div>
            {" "}
            <button
              type="button"
              className="switch-cat-list"
              onClick={() => {
                setMode("Select");
                setNumber(0);
              }}
            >
              Use default cats
            </button>
          </div>
          <div>
            {" "}
            {isSelected ? (
              <button
                className="select-btn"
                type="button"
                onClick={() => setIsSelected(false)}
              >
                Cancel
              </button>
            ) : (
              <button
                className="select-btn"
                type="button"
                onClick={() => setIsSelected(true)}
              >
                Select
              </button>
            )}
          </div>
          <div>
            {" "}
            {isSelected ? (
              <button
                className="fight-btn"
                type="button"
                onClick={onStartClick}
              >
                FIGHT !
              </button>
            ) : null}
          </div>
          <div className="create-cat-container">
            <div className="input-container">
              {" "}
              <h1 className="user-cat-title">Add your Cat :</h1>
              <input
                placeholder="Enter your cat name"
                type="text"
                name="Cat name"
                value={newCatName}
                onChange={(e) => setNewCatName(e.target.value)}
              />
              <input
                placeholder="Enter your cat image link"
                type="text"
                name="Cat image link"
                value={newImageLink}
                onChange={(e) => setNewImageLink(e.target.value)}
              />
            </div>
            <div className="assign-point-container">
              <h3 className="point-left-title">Point left : {pointLeft}</h3>
              <div className="assign-point-div">
                <div className="point-title">
                  <h3>⚔️Attack : </h3>
                  <h3>🪄Magic : </h3>
                  <h3>🛡️Min def : </h3>
                  <h3>🛡️Max def : </h3>
                  <h3>❤️HP : </h3>
                </div>
                <div>
                  {" "}
                  <div className="create-attack">
                    {" "}
                    <button
                      className={
                        attack === 3 ? "change-point-dis" : "change-point"
                      }
                      type="button"
                      onClick={reduceAttack}
                    >
                      -
                    </button>
                    <p>{attack}</p>
                    <button
                      type="button"
                      className={
                        attack === 5 ? "change-point-dis" : "change-point"
                      }
                      onClick={increaseAttack}
                    >
                      +
                    </button>
                  </div>
                  <div className="create-magic">
                    {" "}
                    <button
                      type="button"
                      className={
                        magic === 3 ? "change-point-dis" : "change-point"
                      }
                      onClick={reduceMagic}
                    >
                      -
                    </button>
                    <p>{magic}</p>
                    <button
                      type="button"
                      className={
                        magic === 5 ? "change-point-dis" : "change-point"
                      }
                      onClick={increaseMagic}
                    >
                      +
                    </button>
                  </div>
                  <div className="create-defense-min">
                    {" "}
                    <button
                      className={
                        defenseMin === 7 ? "change-point-dis" : "change-point"
                      }
                      type="button"
                      onClick={reduceDefenseMin}
                    >
                      -
                    </button>
                    <p>{defenseMin}</p>
                    <button
                      className={
                        defenseMin === 15 ? "change-point-dis" : "change-point"
                      }
                      type="button"
                      onClick={increaseDefenseMin}
                    >
                      +
                    </button>
                  </div>
                  <div className="create-defense-min">
                    {" "}
                    <button
                      className={
                        defenseMax === 17 ? "change-point-dis" : "change-point"
                      }
                      type="button"
                      onClick={reduceDefenseMax}
                    >
                      -
                    </button>
                    <p>{defenseMax}</p>
                    <button
                      className={
                        defenseMax === 30 ? "change-point-dis" : "change-point"
                      }
                      type="button"
                      onClick={increaseDefenseMax}
                    >
                      +
                    </button>
                  </div>
                  <div className="create-health-point">
                    {" "}
                    <button
                      className={
                        healthPoint === 14 ? "change-point-dis" : "change-point"
                      }
                      type="button"
                      onClick={reduceHealthPoint}
                    >
                      -
                    </button>
                    <p>{healthPoint}</p>
                    <button
                      className={
                        healthPoint === 20 ? "change-point-dis" : "change-point"
                      }
                      type="button"
                      onClick={increaseHealthPoint}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="create-cat-btn"
                  onClick={createCat}
                >
                  Create your cat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default CustomSelect;
