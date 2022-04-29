import "../../../pages/sass/fightpage-css/result.scss";

const Result = ({ winner, onSelectClick }) => {
  return (
    <div className="result">
      <h1 className="winner-name">{winner.name} has won !</h1>
      <button type="button" className="play-again-btn" onClick={onSelectClick}>
        Play Again.
      </button>
    </div>
  );
};
export default Result;
