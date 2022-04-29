import { useEffect, useState } from "react";

const useOpponentChoice = (turn) => {
  const [opponentChoice, setOpponentChoice] = useState("");
  useEffect(() => {
    if (turn === 1) {
      const options = [
        "attack",
        "special",
        "heal",
        "attack",
        "special",
        "heal",
        "attack",
        "special",
      ];
      setOpponentChoice(options[Math.floor(Math.random() * options.length)]);
    } else {
      setOpponentChoice("");
    }
  }, [turn]);

  return opponentChoice;
};
export default useOpponentChoice;
