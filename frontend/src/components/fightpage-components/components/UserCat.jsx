const UserCat = ({ cat, number, setNumber, isSelected }) => {
  const nextCat = () => {
    if (number !== cat.length - 1) {
      setNumber(number + 1);
    } else if (number === cat.length - 1) {
      setNumber(0);
    }
  };

  const prevCat = () => {
    if (number !== 0) {
      setNumber(number - 1);
    } else if (number === 0) {
      setNumber(cat.length - 1);
    }
  };

  return (
    cat && (
      <div>
        <section>
          {isSelected ? null : (
            <button type="button" onClick={prevCat}>
              Previous
            </button>
          )}
          <img
            className="cat-img"
            src={cat[number].image_link}
            alt={cat[number].name}
          />
          {isSelected ? null : (
            <button type="button" onClick={nextCat}>
              Next
            </button>
          )}
        </section>
        <section>
          <h2>Cat Fighter n°{number + 1} :</h2>
          <h2>{cat[number].name}</h2>
          <ul>
            <li>Attack: {cat[number].other_pets_friendly}</li>
            <li>Power: {cat[number].intelligence}</li>
            <li>
              Defense:{" "}
              {Math.floor(
                (cat[number].max_weight + cat[number].min_weight) / 2
              )}
            </li>
            <li>Health: {cat[number].max_life_expectancy}</li>
            <li>Vitality: {cat[number].min_life_expectancy}</li>
            <li>Luck: {cat[number].playfulness}</li>
          </ul>
        </section>
      </div>
    )
  );
};

export default UserCat;
