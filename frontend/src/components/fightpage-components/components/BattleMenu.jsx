export default function BattleMenu({ onAttack, onSpecial, onHeal, turn }) {
  return (
    <div>
      {turn === 0 ? (
        <button type="button" onClick={onAttack}>
          Claw Strike
        </button>
      ) : null}
      {turn === 0 ? (
        <button type="button" onClick={onSpecial}>
          Meowch
        </button>
      ) : null}
      {turn === 0 ? (
        <button type="button" onClick={onHeal}>
          Felintion
        </button>
      ) : null}
    </div>
  );
}
