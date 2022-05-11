import { useEffect } from "react";
import UserCat from "../components/UserCat";
import "../../../pages/sass/fightpage-css/select.scss";

const Select = ({
  cat,
  number,
  setNumber,
  isSelected,
  setIsSelected,
  onStartClick,
  apiCat,
  setCat,
  setMode,
}) => {
  const nextCat = () => {
    setNumber(number === cat.length - 1 ? 0 : number + 1);
  };

  const prevCat = () => {
    setNumber(number === 0 ? cat.length - 1 : number - 1);
  };

  useEffect(() => {
    setCat(apiCat);
  }, [apiCat]);

  return (
    cat && (
      <div className="select">
        <h1 className="user-cat-title">Choose your CatFighter :</h1>
        <div className="slider">
          {cat.length ? (
            cat.map((catSlide, index) => (
              <UserCat
                number={number}
                key={catSlide.name}
                catSlide={catSlide}
                index={index}
                isSelected={isSelected}
                prevCat={prevCat}
                nextCat={nextCat}
              />
            ))
          ) : (
            <h1>Cats are loading ...</h1>
          )}
        </div>
        <div className="isselected-container">
          {!isSelected && (
            <div>
              <button
                type="button"
                className="switch-cat-list"
                onClick={() => {
                  setMode("CustomSelect");
                  setNumber(0);
                }}
              >
                Use custom cats
              </button>
            </div>
          )}
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
        </div>
      </div>
    )
  );
};

export default Select;
