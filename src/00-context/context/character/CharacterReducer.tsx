import { GET_CHARACTER, GET_CHARACTERS } from "../Types";

interface PropsReducer {
  type: string;
  payload: any;
}

const CharacterReducer = (state: any, { payload, type }: PropsReducer) => {
  switch (type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: payload,
      };
    case GET_CHARACTER:
      return {
        ...state,
        character: payload,
      };
    default:
      return payload;
  }
};

export default CharacterReducer;
