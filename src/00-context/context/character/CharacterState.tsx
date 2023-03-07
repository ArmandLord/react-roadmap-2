import { useReducer, PropsWithChildren } from "react";
import reducer from "./CharacterReducer";
import CharacterContext from "./CharacterContext";
import axios from "axios";
import { GET_CHARACTERS, GET_CHARACTER } from "../Types";

const CharacterState = ({ children }: PropsWithChildren) => {
  // agregar la interfaz de los arreglos
  interface CharacterState {
    characters: [];
    selectedCharacter: {};
  }

  const initialState: CharacterState = {
    characters: [],
    selectedCharacter: {},
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const getCharacters = async () => {
    const { data } = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    dispatch({
      type: GET_CHARACTERS,
      payload: data.results,
    });
  };
  const getProfile = async (id: number) => {
    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    dispatch({
      type: GET_CHARACTER,
      payload: data,
    });
  };
  getProfile(1);

  return (
    <CharacterContext.Provider
      value={{
        state,
        getCharacters,
        getProfile,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterState;
