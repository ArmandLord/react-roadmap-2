import { useContext, useEffect } from "react";
import CharacterContext from "../context/character/CharacterContext";
import ImageContext from "../context/imageGenerate/ImageContext";

const Profile = () => {
  const { state, getProfile } = useContext(CharacterContext);
  const { image, smallImage } = useContext(ImageContext);
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
      <img src={image} alt="lorem" />
      <button onClick={() => smallImage()}>Hacer pequeña</button>
    </div>
  );
};

export default Profile;
