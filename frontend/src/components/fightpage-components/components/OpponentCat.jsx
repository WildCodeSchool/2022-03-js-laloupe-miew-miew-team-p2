const OpponentCat = ({ cat, rdmNumber }) => {
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
