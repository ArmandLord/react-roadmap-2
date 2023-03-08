import Profile from "./components/Profile";
import UserList from "./components/UserList";
// Importamos el Context
import CharacterState from "./context/character/CharacterState";
import ImageStateContext from "./context/imageGenerate/ImageStateContext";

const FastCodeExample = () => {
  return (
    <CharacterState>
      <ImageStateContext>
        <Profile />
        <UserList />
      </ImageStateContext>
    </CharacterState>
  );
};

export default FastCodeExample;
