/* eslint-disable no-shadow */
import { useEffect, useState } from "react";
import BattleAnnouncer from "../components/BattleAnnouncer";
import BattleMenu from "../components/BattleMenu";
import wait from "../components/waitFunction";
import useOpponentChoice from "../components/useOpponentChoice";
import "../../../pages/sass/fightpage-css/battle.scss";

export default function Battle({ cat, number, rdmNumber, onResult, enemyCat }) {
  const userCat = {
    name: "Your cat",
    image: cat[number].image_link,
    attack: cat[number].other_pets_friendly * 10,
    special: cat[number].intelligence,
    defenseMin: cat[number].min_weight,
    defenseMax: cat[number].max_weight,
    health: cat[number].max_life_expectancy * 10,
    luck: cat[number].playfulness,
    vitality: cat[number].min_life_expectancy,
  };
  const opponentCat = {
    name: "Opponent cat",
    image: enemyCat[rdmNumber].image_link,
    attack: enemyCat[rdmNumber].other_pets_friendly,
    special: enemyCat[rdmNumber].intelligence,
    defenseMin: enemyCat[rdmNumber].min_weight,
    defenseMax: enemyCat[rdmNumber].max_weight,
    health: enemyCat[rdmNumber].max_life_expectancy * 10,
    luck: enemyCat[rdmNumber].playfulness,
    vitality: enemyCat[rdmNumber].min_life_expectancy,
  };

  function getRdmNmb(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const attack = ({ attacker, receiver }) => {
    const damage =
      attacker.attack * getRdmNmb(7, 11) -
      getRdmNmb(receiver.defenseMin, receiver.defenseMax);
    const finalDamage = damage > 0 ? damage : 0;
    return finalDamage;
  };

  const special = ({ attacker, receiver }) => {
    const damage =
      attacker.special * getRdmNmb(11, 13) -
      Math.floor((receiver.defenseMin + receiver.defenseMax) / 2);
    const finalDamage = damage > 0 ? damage : 0;
    return finalDamage;
  };

  const kameha = ({ attacker, receiver }) => {
    const damage =
      (attacker.special + attacker.attack) * 250 - receiver.defenseMax;
    return damage;
  };

  const heal = ({ attacker }) => {
    return getRdmNmb(0, attacker.luck) * attacker.vitality;
  };

  const [sequence, setSequence] = useState({});

  const [playerSpecialCD, setPlayerSpecialCD] = useState(0);
  const [opponentSpecialCD, setOpponentSpecialCD] = useState(0);
  const [playerHealCD, setPlayerHealCD] = useState(0);
  const [opponentHealCD, setOpponentHealCD] = useState(0);

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
              setAnnouncerMessage(`⚔️ ${attacker.name} is attacking !`);

              await wait(2000);

              if (damage <= 0) {
                setAnnouncerMessage(`${attacker.name} missed !!`);
              } else if (damage < 10) {
                setAnnouncerMessage(`That's not very effective...`);
              } else if (damage >= 35) {
                setAnnouncerMessage(
                  `${attacker.name} perform a critical hit !!`
                );
              } else {
                setAnnouncerMessage(`${receiver.name} felt that !`);
              }

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
              setAnnouncerMessage(`🪄 ${attacker.name} uses a special skill !`);

              await wait(2000);

              if (damage <= 0) {
                setAnnouncerMessage(`${attacker.name} missed !!`);
              } else if (damage < 10) {
                setAnnouncerMessage(`That's not very effective...`);
              } else if (damage >= 35) {
                setAnnouncerMessage(
                  `${attacker.name} perform a critical hit !!`
                );
              } else {
                setAnnouncerMessage(`${receiver.name} felt that !`);
              }

              if (turn === 0) {
                setOpponentHealth((h) => (h - damage > 0 ? h - damage : 0));
              } else {
                setUserHealth((h) => (h - damage > 0 ? h - damage : 0));
              }
              await wait(2000);

              setAnnouncerMessage(`Now it's ${receiver.name}'s turn !`);

              if (turn === 0) {
                setPlayerSpecialCD(4);
              } else {
                setOpponentSpecialCD(3);
              }

              await wait(1500);

              setTurn(turn === 0 ? 1 : 0);
              setInSequence(false);
            })();
            break;
          }
          case "kameha": {
            const damage = kameha({ attacker, receiver });

            (async () => {
              setInSequence(true);
              setAnnouncerMessage(`⚔️ ${attacker.name} use KAMEHAMEHAAAA !!`);

              await wait(2000);

              if (damage <= 0) {
                setAnnouncerMessage(`${attacker.name} missed !!`);
              } else if (damage < 10) {
                setAnnouncerMessage(`That's not very effective...`);
              } else if (damage >= 35) {
                setAnnouncerMessage(`It's over 9999 !!!! `);
              } else {
                setAnnouncerMessage(
                  `${receiver.name} now feel like being freeza..`
                );
              }

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
              setAnnouncerMessage(
                `🧪 ${attacker.name} is trying to heal himself !`
              );

              await wait(2000);

              if (recovered > 0) {
                setAnnouncerMessage(`${attacker.name} has recovered health !`);
              } else {
                setAnnouncerMessage(
                  `${attacker.name} failed to heal himself...`
                );
              }
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

              if (turn === 0) {
                setPlayerHealCD(3);
              } else {
                setOpponentHealCD(2);
              }

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

  const opponentChoice = useOpponentChoice(
    turn,
    opponentSpecialCD,
    opponentHealCD,
    opponentHealth,
    opponentCat
  );

  useEffect(() => {
    if (turn === 0) {
      setPlayerSpecialCD(playerSpecialCD === 0 ? 0 : playerSpecialCD - 1);
    } else if (turn === 1) {
      setOpponentSpecialCD(opponentSpecialCD === 0 ? 0 : opponentSpecialCD - 1);
    }
  }, [turn]);

  useEffect(() => {
    if (turn === 0) {
      setPlayerHealCD(playerHealCD === 0 ? 0 : playerHealCD - 1);
    } else if (turn === 1) {
      setOpponentHealCD(opponentHealCD === 0 ? 0 : opponentHealCD - 1);
    }
  }, [turn]);

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
      <div className="opponent-menu">
        <div className="opponent-card">
          {" "}
          <img
            className="opponent-img-battle"
            src={enemyCat[rdmNumber].image_link}
            alt="opponent cat"
          />
          <h1 className="opponent-name">Opponent : {opponentHealth}❤️</h1>
        </div>
      </div>
      <div className="battle-announcer-div">
        {" "}
        <BattleAnnouncer
          message={announcerMessage || "It's your turn to play."}
        />
      </div>

      <div className="player-menu">
        {" "}
        <div className="player-div">
          {" "}
          <div className="player-card">
            <h1 className="player-name">Player : {userHealth}❤️</h1>
            <img
              className="player-img-battle"
              src={cat[number].image_link}
              alt="user cat"
            />
          </div>
          <div className="player-stats">
            <BattleMenu
              turn={turn}
              playerSpecialCD={playerSpecialCD}
              playerHealCD={playerHealCD}
              inSequence={inSequence}
              rdmNumber={rdmNumber}
              onKameha={() => setSequence({ turn, mode: "kameha" })}
              onAttack={() => setSequence({ turn, mode: "attack" })}
              onSpecial={() => setSequence({ turn, mode: "special" })}
              onHeal={() => setSequence({ turn, mode: "heal" })}
            />
          </div>
        </div>
      </div>
      <div className="vs-container">
        <h1 className="vs-title">VS</h1>
      </div>
    </div>
  );
}
