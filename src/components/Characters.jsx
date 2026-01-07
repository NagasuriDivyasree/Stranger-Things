import { useState, memo } from "react";
import { characters } from "../Data/characters";
import CharacterModal from "./CharacterModal";
import "./Characters.css";

function Characters() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="characters" id="characters">
      <h2>Characters</h2>

      <div className="grid">
        {characters.map((char) => (
          <div
            key={char.id}
            className="card"
            onClick={() => setSelected(char)}
          >
            <img src={char.image} alt={char.name} />
            <h3>{char.name}</h3>
            <p>{char.power}</p>
          </div>
        ))}
      </div>

      <CharacterModal
        character={selected}
        onClose={() => setSelected(null)}
      />
    </div>
  );
}

export default memo(Characters);
