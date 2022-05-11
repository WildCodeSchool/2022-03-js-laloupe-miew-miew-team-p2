/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-unresolved */
import Portail from "@components/Portail";
import { useState } from "react";

export default function CatsCard({ cat }) {
  const [display, setDisplay] = useState(false);
  return (
    <section className="card">
      <img
        onClick={() => setDisplay(true)}
        src={cat.image_link}
        alt={cat.name}
        className="image-chat"
      />
      <h2 className="cat-name">{cat.name}</h2>
      {display && <Portail cat={cat} setDisplay={setDisplay} />}
    </section>
  );
}
