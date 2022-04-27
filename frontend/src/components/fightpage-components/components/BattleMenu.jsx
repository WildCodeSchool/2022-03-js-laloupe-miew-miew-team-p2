export default function BattleMenu({ onAttack, onSpecial, onHeal, turn }) {
  return (
    <div>
      {turn === 0 ? (
        <button type="button" onClick={onAttack}>
          Attack
        </button>
      ) : null}
      {turn === 0 ? (
        <button type="button" onClick={onSpecial}>
          Special
        </button>
      ) : null}
      {turn === 0 ? (
        <button type="button" onClick={onHeal}>
          Heal
        </button>
      ) : null}
    </div>
  );
}
