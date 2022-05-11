const UserCat = ({ catSlide, number, index, isSelected, prevCat, nextCat }) => {
  return (
    <div className={index === number ? "slide active" : "slide"}>
      {index === number && (
        <div className="user-cat">
          <section className="slide-container">
            {" "}
            <h1 className="user-cat-name">{catSlide.name}</h1>
            <div className="usercat-select-container">
              <div className="left-arrow">
                {isSelected ? null : (
                  <button className="prev-btn" type="button" onClick={prevCat}>
                    &#171;
                  </button>
                )}
              </div>
              <img
                className="usercat-img-select"
                src={catSlide.image_link}
                alt={catSlide.name}
              />
              <div className="right-arrow">
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
            <div>
              <p className="stats">
                ⚔️ Attack: {catSlide.other_pets_friendly * 7}-
                {catSlide.other_pets_friendly * 11}
              </p>
              <p className="stats">
                🪄 Magic: {catSlide.intelligence * 11}-
                {catSlide.intelligence * 13}
              </p>
              <p className="stats">
                🛡️ Defense: {catSlide.min_weight}-{catSlide.max_weight}
              </p>
              <p className="stats">
                🧪 Average Recovery:{" "}
                {Math.floor(
                  (catSlide.min_life_expectancy * catSlide.playfulness) / 2
                )}
              </p>
              <p className="stats">
                ❤️ Health Point: {catSlide.max_life_expectancy * 10}
              </p>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default UserCat;
