import UserCat from "../components/UserCat";

const Select = ({
  cat,
  number,
  setNumber,
  isSelected,
  setIsSelected,
  onStartClick,
}) => {
  return (
    <div className="select">
      <UserCat
        cat={cat}
        number={number}
        setNumber={setNumber}
        isSelected={isSelected}
      />
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
            <button className="fight-btn" type="button" onClick={onStartClick}>
              FIGHT !
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Select;
