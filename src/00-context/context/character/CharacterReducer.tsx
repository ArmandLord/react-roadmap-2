import { GET_CHARACTER, GET_CHARACTERS } from "../Types";

const CharacterReducer = (type: string, payload: [] | {}) => {
  switch (type) {
    case GET_CHARACTERS:
      return {
        characters: payload,
      };
    case GET_CHARACTER:
      return {
        selectedCharacter: payload,
      };
    default:
      return payload;
  }
};

export default CharacterReducer;
