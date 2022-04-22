import { useEffect, useState } from "react";

const useOpponentChoice = (turn) => {
  const [opponentChoice, setOpponentChoice] = useState("");

  useEffect(() => {
    if (turn === 1) {
      const options = ["attack", "special", "heal"];
      setOpponentChoice(options[Math.floor(Math.random() * options.length)]);
    }
  }, [turn]);

  return opponentChoice;
};
export default useOpponentChoice;
