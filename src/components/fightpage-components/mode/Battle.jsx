/* eslint-disable no-shadow */
import { useEffect, useState } from "react";
import BattleAnnouncer from "../components/BattleAnnouncer";
import BattleMenu from "../components/BattleMenu";
import wait from "../components/waitFunction";
import useOpponentChoice from "../components/useOpponentChoice";

export default function Battle({ cat, number, rdmNumber, onResult }) {
  const userCat = {
    name: "Your cat",
    image: cat[number].image_link,
    attack: cat[number].other_pets_friendly,
    special: cat[number].intelligence,
    defenseMin: cat[number].min_weight,
    defenseMax: cat[number].max_weight,
    health: cat[number].max_life_expectancy * 10,
    luck: cat[number].playfulness,
    vitality: cat[number].min_life_expectancy,
  };
  const opponentCat = {
    name: "Opponent cat",
    image: cat[rdmNumber].image_link,
    attack: cat[rdmNumber].other_pets_friendly,
    special: cat[rdmNumber].intelligence,
    defenseMin: cat[rdmNumber].min_weight,
    defenseMax: cat[rdmNumber].max_weight,
    health: cat[rdmNumber].max_life_expectancy * 10,
    luck: cat[rdmNumber].playfulness,
    vitality: cat[rdmNumber].min_life_expectancy,
  };

  function getRdmNmb(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const attack = ({ attacker, receiver }) => {
    const finalDamage =
      attacker.attack * getRdmNmb(7, 10) -
      getRdmNmb(receiver.defenseMin, receiver.defenseMax);
    return finalDamage;
  };

  const special = ({ attacker, receiver }) => {
    const finalDamage =
      attacker.special * getRdmNmb(7, 10) -
      getRdmNmb(receiver.defenseMin, receiver.defenseMax);
    return finalDamage;
  };

  const heal = ({ attacker }) => {
    return getRdmNmb(0, attacker.luck) * attacker.vitality;
  };

  const [sequence, setSequence] = useState({});

  const useBattleSequence = (sequence) => {
    const [turn, setTurn] = useState(0);
    const [inSequence, setInSequence] = useState(false);
    const [userHealth, setUserHealth] = useState(userCat.health);
    const [opponentHealth, setOpponentHealth] = useState(opponentCat.health);
    const [announcerMessage, setAnnouncerMessage] = useState("");

    useEffect(() => {
      const { mode, turn } = sequence;

      if (mode) {
        const attacker = turn === 0 ? userCat : opponentCat;
        const receiver = turn === 0 ? opponentCat : userCat;

        switch (mode) {
          case "attack": {
            const damage = attack({ attacker, receiver });

            (async () => {
              setInSequence(true);
              setAnnouncerMessage(`${attacker.name} has chosen to attack !`);

              await wait(2000);

              setAnnouncerMessage(`${receiver.name} felt that !`);
              if (turn === 0) {
                setOpponentHealth((h) => (h - damage > 0 ? h - damage : 0));
              } else {
                setUserHealth((h) => (h - damage > 0 ? h - damage : 0));
              }
              await wait(2000);

              setAnnouncerMessage(`Now it's ${receiver.name}'s turn !`);

              await wait(1500);

              setTurn(turn === 0 ? 1 : 0);
              setInSequence(false);
            })();
            break;
          }
          case "special": {
            const damage = special({ attacker, receiver });

            (async () => {
              setInSequence(true);
              setAnnouncerMessage(`${attacker.name} uses a special attack !`);

              await wait(2000);

              setAnnouncerMessage(`${receiver.name} felt that !`);
              if (turn === 0) {
                setOpponentHealth((h) => (h - damage > 0 ? h - damage : 0));
              } else {
                setUserHealth((h) => (h - damage > 0 ? h - damage : 0));
              }
              await wait(2000);

              setAnnouncerMessage(`Now it's ${receiver.name}'s turn !`);

              await wait(1500);

              setTurn(turn === 0 ? 1 : 0);
              setInSequence(false);
            })();
            break;
          }
          case "heal": {
            const recovered = heal({ attacker });

            (async () => {
              setInSequence(true);
              setAnnouncerMessage(`${attacker.name} is healing himself !`);

              await wait(2000);

              setAnnouncerMessage(`${attacker.name} has recovered health.`);
              if (turn === 0) {
                setUserHealth((h) =>
                  h + recovered <= attacker.health
                    ? h + recovered
                    : attacker.health
                );
              } else {
                setOpponentHealth((h) =>
                  h + recovered <= attacker.health
                    ? h + recovered
                    : attacker.health
                );
              }
              await wait(2000);

              setAnnouncerMessage(`Now it's ${receiver.name}'s turn !`);
              await wait(1500);

              setTurn(turn === 0 ? 1 : 0);
              setInSequence(false);
            })();
            break;
          }
          default: {
            break;
          }
        }
      }
    }, [sequence]);
    return {
      turn,
      inSequence,
      userHealth,
      opponentHealth,
      announcerMessage,
    };
  };
  const { turn, inSequence, userHealth, opponentHealth, announcerMessage } =
    useBattleSequence(sequence);

  const opponentChoice = useOpponentChoice(turn);

  useEffect(() => {
    if (opponentChoice && turn === 1 && !inSequence) {
      setSequence({ turn, mode: opponentChoice });
    }
  }, [turn, opponentChoice, inSequence]);

  useEffect(() => {
    if (userHealth === 0 || opponentHealth === 0) {
      (async () => {
        await wait(2000);
        onResult(userHealth === 0 ? opponentCat : userCat);
      })();
    }
  }, [userHealth, opponentHealth]);

  return (
    <div className="battle">
      <h1 className="user-cat-name">{userCat.name}</h1>
      <img
        className="usercat-img-battle"
        src={cat[number].image_link}
        alt="user cat"
      />
      <h2>
        <strong>{userHealth}</strong>
      </h2>
      <BattleMenu
        turn={turn}
        onAttack={() => setSequence({ turn, mode: "attack" })}
        onSpecial={() => setSequence({ turn, mode: "special" })}
        onHeal={() => setSequence({ turn, mode: "heal" })}
      />
      <BattleAnnouncer
        message={announcerMessage || "What will your cat do ?"}
      />
      <h1 className="user-cat-name">{opponentCat.name}</h1>
      <img
        className="opponentcat-img-battle"
        src={cat[rdmNumber].image_link}
        alt="opponent cat"
      />
      <h2>
        <strong>{opponentHealth}</strong>
      </h2>
    </div>
  );
}
