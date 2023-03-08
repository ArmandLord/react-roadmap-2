import { useContext, useEffect } from "react";
import CharacterContext from "../context/character/CharacterContext";
import { Character } from "../interfaces/index";

const UserList = () => {
  const { state, getCharacters } = useContext(CharacterContext);
  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div>
      {state?.characters?.map((character: Character) => (
        <div key={character.id}>
          <h1>{character.name}</h1>
          <img src={character.image} alt={character.name} />
        </div>
      ))}
    </div>
  );
};

export default UserList;
