import useTypedMessage from "./useTypedMessage";

export default function BattleAnnouncer({ message }) {
  const typedMessage = useTypedMessage(message);
  return <div>{typedMessage}</div>;
}
