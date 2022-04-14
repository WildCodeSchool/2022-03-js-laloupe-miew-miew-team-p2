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
              prev
            </button>
          )}
          <img
            className="cat-img"
            src={cat[number].image_link}
            alt={cat[number].name}
          />
          {isSelected ? null : (
            <button type="button" onClick={nextCat}>
              next
            </button>
          )}
        </section>
        <section>
          <h2>Cat Fighter n°{number + 1} :</h2>
          <h2>{cat[number].name}</h2>
          <ul>
            <li>attack: {cat[number].other_pets_friendly}</li>
            <li>defense min: {cat[number].min_weight}</li>
            <li>defense max: {cat[number].max_weight}</li>
            <li>pv : {cat[number].max_life_expectancy}</li>
          </ul>
        </section>
      </div>
    )
  );
};

export default UserCat;
