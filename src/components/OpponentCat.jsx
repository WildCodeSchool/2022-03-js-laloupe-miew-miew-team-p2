const OpponentCat = ({ cat }) => {
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const rdmNumber = getRandomNumber(0, 15);
  return (
    cat && (
      <div>
        <img
          className="cat-img"
          src={cat[rdmNumber].image_link}
          alt={cat[rdmNumber].name}
        />
        <h2>Opponents Cat :</h2>
        <h2>{cat[rdmNumber].name}</h2>
      </div>
    )
  );
};

export default OpponentCat;
