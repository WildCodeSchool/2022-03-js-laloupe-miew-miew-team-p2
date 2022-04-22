/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
export default function BattleMenu({ onAttack, onSpecial, onHeal }) {
  return (
    <div>
      <div onClick={onAttack}>Attack</div>
      <div onClick={onSpecial}>Special</div>
      <div onClick={onHeal}>Heal</div>
    </div>
  );
}
