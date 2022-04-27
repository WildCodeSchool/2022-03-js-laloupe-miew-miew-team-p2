const Result = ({ winner, onSelectClick }) => {
  return (
    <div className="result">
      <h1>{winner.name} has won !</h1>
      <button type="button" onClick={onSelectClick}>
        Play Again.
      </button>
    </div>
  );
};
export default Result;
