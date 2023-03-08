import { createContext } from "react";

interface CharacterContext {
  state: any;
  getCharacters: () => void;
  getProfile: (id: number) => void;
}

const CharacterContext = createContext({} as CharacterContext);

export default CharacterContext;
