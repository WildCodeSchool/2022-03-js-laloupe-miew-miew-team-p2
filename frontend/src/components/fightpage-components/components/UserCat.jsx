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
    cat.length && (
      <div className="user-cat">
        <section className="slide-container">
          {" "}
          <h1 className="user-cat-name">Choose your Cat :</h1>
          <h1 className="user-cat-name">{cat[number].name}</h1>
          <div className="usercat-select-container">
            <div>
              {" "}
              {isSelected ? null : (
                <button className="prev-btn" type="button" onClick={prevCat}>
                  &#171;
                </button>
              )}
            </div>
            <img
              className="usercat-img-select"
              src={cat[number].image_link}
              alt={cat[number].name}
            />
            <div>
              {isSelected ? null : (
                <button className="next-btn" type="button" onClick={nextCat}>
                  &#187;
                </button>
              )}
            </div>
          </div>
        </section>
        <section className="stats-container">
          {" "}
          <section className="user-stats">
            <h2>Stats</h2>
            <p>
              Attack: {cat[number].other_pets_friendly * 7}-
              {cat[number].other_pets_friendly * 10}
            </p>
            <p>
              Magic: {cat[number].intelligence * 7}-
              {cat[number].intelligence * 10}
            </p>
            <p>
              Defense: {cat[number].min_weight}-{cat[number].max_weight}
            </p>
            <p>
              Recovery:{" "}
              {Math.floor(
                (cat[number].min_life_expectancy * cat[number].playfulness) / 2
              )}
            </p>
            <p>Health Point: {cat[number].max_life_expectancy * 10}</p>
          </section>
        </section>
      </div>
    )
  );
};

export default UserCat;
