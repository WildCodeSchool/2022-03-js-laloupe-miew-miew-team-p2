import UserCat from "../components/UserCat";

const SelectMenu = ({
  cat,
  number,
  setNumber,
  isSelected,
  setIsSelected,
  onStartClick,
}) => {
  return (
    <div>
      <UserCat
        cat={cat}
        number={number}
        setNumber={setNumber}
        isSelected={isSelected}
      />
      {isSelected ? (
        <button type="button" onClick={() => setIsSelected(false)}>
          Cancel your choice
        </button>
      ) : (
        <button type="button" onClick={() => setIsSelected(true)}>
          Select this Cat
        </button>
      )}
      {isSelected ? (
        <section>
          <h3>
            Are you sure of your choice ?
            <button type="button" onClick={onStartClick}>
              Yes
            </button>
          </h3>
        </section>
      ) : null}
    </div>
  );
};

export default SelectMenu;
