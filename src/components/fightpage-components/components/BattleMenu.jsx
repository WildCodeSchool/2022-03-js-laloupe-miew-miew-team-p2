export default function BattleMenu({ onAttack, onSpecial, onHeal, turn }) {
  return (
    <div className="battle-menu">
      {turn === 0 ? (
        <button type="button" className="skills-btn" onClick={onAttack}>
          Claw Strike
        </button>
      ) : null}
      {turn === 0 ? (
        <button type="button" className="skills-btn" onClick={onSpecial}>
          Meowch
        </button>
      ) : null}
      {turn === 0 ? (
        <button type="button" className="skills-btn" onClick={onHeal}>
          Felintion
        </button>
      ) : null}
    </div>
  );
}
