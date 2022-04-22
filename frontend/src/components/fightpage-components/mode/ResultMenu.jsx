const EndMenu = ({ winner, onSelectClick }) => {
  return (
    <div>
      <h1>{winner.name} has won !</h1>
      <button type="button" onClick={onSelectClick}>
        Play Again.
      </button>
    </div>
  );
};
export default EndMenu;
