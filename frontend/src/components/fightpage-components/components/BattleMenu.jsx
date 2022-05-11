export default function BattleMenu({
  onAttack,
  onSpecial,
  onHeal,
  turn,
  playerSpecialCD,
  playerHealCD,
  inSequence,
  onKameha,
  rdmNumber,
}) {
  return (
    <div className="battle-menu">
      {rdmNumber === 16 && (
        <button
          type="button"
          className="kameha-btn"
          onClick={turn === 0 && inSequence === false ? onKameha : null}
        >
          Kamehameha !!
        </button>
      )}
      <button
        type="button"
        className={turn === 0 ? "skills-btn" : "skills-btn-onCD"}
        onClick={turn === 0 && inSequence === false ? onAttack : null}
      >
        Claw Strike
      </button>
      <button
        type="button"
        className={
          turn === 0 && playerSpecialCD === 0 ? "skills-btn" : "skills-btn-onCD"
        }
        onClick={
          turn === 0 && playerSpecialCD === 0 && inSequence === false
            ? onSpecial
            : null
        }
      >
        Meowch{" "}
        <span className="skill-cd-count">
          {playerSpecialCD !== 0 ? `(${playerSpecialCD})` : ""}
        </span>
      </button>
      <button
        type="button"
        className={
          turn === 0 && playerHealCD === 0 ? "skills-btn" : "skills-btn-onCD"
        }
        onClick={
          turn === 0 && playerHealCD === 0 && inSequence === false
            ? onHeal
            : null
        }
      >
        Abrakabra{" "}
        <span className="skill-cd-count">
          {playerHealCD !== 0 ? `(${playerHealCD})` : ""}
        </span>
      </button>
    </div>
  );
}
