/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { createPortal } from "react-dom";
import "./Portail.css";

const Portail = ({ cat, setDisplay }) => {
  return createPortal(
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events

    <div
      className="portail"
      onClick={() => setDisplay(false)}
      role="button"
      tabIndex="0"
    >
      <div>
        <button type="button" className="close-button">
          X
        </button>
      </div>
      <div className="position-portail-image">
        <img
          src={cat.image_link}
          alt={cat.name}
          className="portail-image-chat"
        />
      </div>
      <div className="details">
        <a
          href="https://fr.wikipedia.org/wiki/Liste_des_races_de_chats"
          target="_blank"
          rel="noreferrer"
        >
          <p className="cat-details">
            🐈 Name : <span id="bold-title">{cat.name}</span>
          </p>
        </a>

        <a
          href="https://www.mondou.com/fr-CA/blogues/conseils/chat/lorigine-des-races-de-chats-ac39.html"
          target="_blank"
          rel="noreferrer"
        >
          <p className="cat-details">
            🏳️ Origin : <span id="bold-title">{cat.origin}</span>
          </p>
        </a>
        <a
          href="https://lemagduchat.ouest-france.fr/dossier-141-toilettage-chat.html"
          target="_blank"
          rel="noreferrer"
        >
          <p className="cat-details">
            🧼 Grooming : <span id="bold-title">{cat.grooming} /5</span>
          </p>
        </a>
        <a
          href="https://www.crave.fr/conseils/chat/intelligence-chat"
          target="_blank"
          rel="noreferrer"
        >
          <p className="cat-details">
            🧠 Intelligence : <span id="bold-title">{cat.intelligence} /5</span>
          </p>
        </a>
        <a
          href="https://caats.co/courbe-poids-chat/"
          target="_blank"
          rel="noreferrer"
        >
          <p className="cat-details">
            ⚖️ max weight : <span id="bold-title">{cat.max_weight} Pounds</span>
          </p>
        </a>
        <a
          href="https://petnutritionalliance.org/cat.php?lg=fr_FR"
          target="_blank"
          rel="noreferrer"
        >
          <p className="cat-details">
            ⚖️ min weight : <span id="bold-title">{cat.min_weight} Pounds</span>
          </p>
        </a>
        <a
          href="https://www.purina.fr/articles/chat/sante/bien-etre/longevite"
          target="_blank"
          rel="noreferrer"
        >
          <p className="cat-details">
            ⏳ Max Life Expectancy :{" "}
            <span id="bold-title"> {cat.max_weight} years around</span>
          </p>
        </a>
        <a
          href="https://wamiz.com/chats/guide/miaulement-chat-0544.html"
          target="_blank"
          rel="noreferrer"
        >
          <p className="cat-details">
            🤫🔈 Meowing : <span id="bold-title">{cat.meowing} /5</span>
          </p>
        </a>
      </div>
    </div>,
    document.body
  );
};

export default Portail;
