import { useEffect } from "react";
import UserCat from "../components/UserCat";
import "../../../pages/sass/fightpage-css/select.scss";

const CustomSelect = ({
  cat,
  number,
  setNumber,
  isSelected,
  setIsSelected,
  onStartClick,
  newCatName,
  setNewCatName,
  customCat,
  createCat,
  setCat,
  setMode,
  newImageLink,
  setNewImageLink,
}) => {
  const nextCat = () => {
    setNumber(number === cat.length - 1 ? 0 : number + 1);
  };

  const prevCat = () => {
    setNumber(number === 0 ? cat.length - 1 : number - 1);
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
            <button
              type="button"
              onClick={() => {
                setMode("Select");
                setNumber(0);
              }}
            >
              Use default cats
            </button>
            <div>
              {" "}
              <h1>Add your cat</h1>
              <input
                placeholder="Cat name"
                type="text"
                name="Cat name"
                value={newCatName}
                onChange={(e) => setNewCatName(e.target.value)}
              />
              <input
                placeholder="Cat image link"
                type="text"
                name="Cat image link"
                value={newImageLink}
                onChange={(e) => setNewImageLink(e.target.value)}
              />
              <button type="button" onClick={createCat}>
                Create your cat
              </button>
            </div>
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
        </div>
      </div>
    )
  );
};

export default CustomSelect;
