import UserCat from "../components/UserCat";
import "../../../pages/sass/fightpage-css/select.scss";

const Select = ({
  cat,
  number,
  setNumber,
  isSelected,
  setIsSelected,
  onStartClick,
}) => {
  const nextCat = () => {
    setNumber(number === cat.length - 1 ? 0 : number + 1);
  };

  const prevCat = () => {
    setNumber(number === 0 ? cat.length - 1 : number - 1);
  };

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
