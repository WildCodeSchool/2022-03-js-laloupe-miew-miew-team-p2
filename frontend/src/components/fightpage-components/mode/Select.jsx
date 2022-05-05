import UserCat from "../components/UserCat";
import "../../../pages/sass/fightpage-css/select.scss";

const Select = ({
  cat,
  number,
  setNumber,
  isSelected,
  setIsSelected,
  onStartClick,
  isApiCat,
  setIsApiCat,
  newCatName,
  setNewCatName,
  customCat,
  addCat,
  createCat,
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
        {isApiCat === true ? (
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
        ) : (
          <div className="slider">
            {customCat &&
              customCat.map((catSlide, index) => (
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
        )}
        <div className="isselected-container">
          <div>
            {isApiCat === true ? (
              <button
                type="button"
                onClick={() => {
                  setIsApiCat(false);
                }}
              >
                Use custom cats
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setIsApiCat(true);
                }}
              >
                Use default cats
              </button>
            )}
            {isApiCat === true ? null : (
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
                <button type="button" onClick={createCat}>
                  Create your cat
                </button>
                <button type="button" onClick={addCat}>
                  Add you cat
                </button>
              </div>
            )}
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

export default Select;
