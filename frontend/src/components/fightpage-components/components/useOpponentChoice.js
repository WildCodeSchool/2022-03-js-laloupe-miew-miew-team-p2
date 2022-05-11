import { useEffect, useState } from "react";

const useOpponentChoice = (
  turn,
  opponentSpecialCD,
  opponentHealCD,
  opponentHealth,
  opponentCat
) => {
  const [opponentChoice, setOpponentChoice] = useState("");
  useEffect(() => {
    if (
      turn === 1 &&
      opponentSpecialCD === 0 &&
      opponentHealCD === 0 &&
      opponentHealth === opponentCat.health
    ) {
      const options = ["attack", "special"];
      setOpponentChoice(options[Math.floor(Math.random() * options.length)]);
    } else if (turn === 1 && opponentSpecialCD === 0 && opponentHealCD === 0) {
      const options = ["attack", "special", "heal"];
      setOpponentChoice(options[Math.floor(Math.random() * options.length)]);
    } else if (turn === 1 && opponentSpecialCD > 0 && opponentHealCD === 0) {
      const options = ["attack", "heal", "attack", "attack"];
      setOpponentChoice(options[Math.floor(Math.random() * options.length)]);
    } else if (turn === 1 && opponentSpecialCD === 0 && opponentHealCD > 0) {
      const options = ["attack", "special"];
      setOpponentChoice(options[Math.floor(Math.random() * options.length)]);
    } else if (turn === 1 && opponentSpecialCD > 0 && opponentHealCD > 0) {
      const options = ["attack"];
      setOpponentChoice(options[Math.floor(Math.random() * options.length)]);
    } else {
      setOpponentChoice("");
    }
  }, [turn]);

  return opponentChoice;
};
export default useOpponentChoice;
