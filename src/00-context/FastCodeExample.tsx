import Profile from "./components/Profile";
import UserList from "./components/UserList";
// Importamos el Context
import CharacterState from "./context/character/CharacterState";

const FastCodeExample = () => {
  return (
    <CharacterState>
      <Profile />
      <UserList />
    </CharacterState>
  );
};

export default FastCodeExample;
