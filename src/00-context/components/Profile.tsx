import { useContext, useEffect } from "react";
import CharacterContext from "../context/character/CharacterContext";
import { Character } from "../interfaces/index";

const Profile = () => {
  const { state, getProfile } = useContext(CharacterContext);
  useEffect(() => {
    getProfile(300);
  }, []);
  const { character } = state;

  return (
    <div>
      {character && (
        <div key={character.id}>
          <h1>{character.name}</h1>
          <img src={character.image} alt={character.name} />
        </div>
      )}
    </div>
  );
};

export default Profile;
