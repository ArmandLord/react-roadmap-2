import { GET_CHARACTER, GET_CHARACTERS } from "../Types";

const CharacterReducer = (type: string, payload: [] | {}) => {
  switch (type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: payload,
      };
    case GET_CHARACTER:
      return {
        ...state,
        selectedCharacter: payload,
      };
    default:
      return state;
  }
};

export default CharacterReducer;
