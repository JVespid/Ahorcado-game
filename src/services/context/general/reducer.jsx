export const methods = {
  UPDATE_PAGE: `UPDATE_PAGE`,
  RESET_CLUE_WORD: `RESET_CLUE_WORD`,
  CHANGE_GAME_CLUE_WORD: `CHANGE_GAME_CLUE_WORD`,
  SET_LAST_LETTER: `SET_LAST_LETTER`,
  SET_USED_LETTER: `SET_USED_LETTER`,
};

export const Reducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case "RESET_CLUE_WORD":
      return {
        ...state,
        game: {
          ...state.game,
          id: 0,
          clue: "",
          word: "",
        },
      };
    case "CHANGE_GAME_CLUE_WORD":
      return {
        ...state,
        game: {
          ...state.game,
          id: payload.id ? payload.id : 0,
          word: payload.word ? payload.word : "",
          clue: payload.clue ? payload.clue : "",
        },
      };
    case "SET_LAST_LETTER":
      return {
        ...state,
        game: {
          ...state.game,
          lastLetter: payload,
        },
      };
    case "SET_USED_LETTER":
      return {
        ...state,
        game: {
          ...state.game,
          usedLetter: payload.bool,
        },
      };
  }
};
