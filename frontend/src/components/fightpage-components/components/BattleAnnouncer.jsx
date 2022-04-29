import useTypedMessage from "./useTypedMessage";

export default function BattleAnnouncer({ message }) {
  const typedMessage = useTypedMessage(message);
  return (
    <div className="battle-annoncer">
      <div className="battle-annoncer-text">{typedMessage}</div>
    </div>
  );
}
