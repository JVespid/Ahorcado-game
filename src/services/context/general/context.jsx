import React, { createContext, useReducer, useMemo } from "react";
import { Reducer, methods } from "./reducer";

export const contextGeneral = createContext();

const initialState = {
  game: {
    id: 0,
    word: "",
    clue: "",
    lastLetter: "",
    usedLetter: true,
  },
  system: {
    colors: {
      white_primary: "rgb(243, 245, 252)", // white
      white_secondary: "rgb(10, 56, 113)", // blue
      white_tertiary: "rgba(195, 117, 24, 1)", // orange
      while_quarter: "rgba(30, 30, 30, 1)", // black
      transparent: "rgba(0, 0, 0, 0.1)", // transparent
      correct_primary: "rgb(0, 197, 0)", // green
    },
    home: {
      btn: [
        {
          value: "Iniciar juego",
          type: "active",
          width: "90%",
          height: "120px",
          href: "/game",
        },
        {
          value: "Agregar nueva palabra",
          type: "inactive",
          width: "80%",
          height: "60px",
          href: "/addLetter",
        },
      ],
    },
    addLetter: {
      input: {
        placeHolder: "Ingresa una palabra nueva",
        type: "text",
      },
      advertence: {
        text: "La palabra debe tener al menos 3 letras",
      },

      btn: [
        {
          value: "guardar y empezar",
          type: "active",
          width: "90%",
          height: "60px",
          action: "next",
        },
        {
          value: "cancelar",
          type: "inactive",
          width: "90%",
          height: "60px",
          action: "cancel",
        },
      ],
    },

    game: {
      modalWinOrLose: {
        titles: {
          playing: "",
          win: "Ganador",
          lose: "Perdiste",
        },
        messages: {
          // para que el front end no se rompa, hay que dividir los mensajes en arrays 40 - 50 caracteres
          playing: "",
          win: [
            ["Felicidades, ¡eso no fue nada para ti!"],
            ["prueba otra vez y demuestra que no fue suerte"],
          ],
          lose: ["Eso estuvo cercas, inténtalo otra vez"],
        },
        buttons: {
          playing: "",
          win: "Juega de nuevo",
          lose: "Vuelve a intentarlo",
        },
      },
    },
  },
};
const Context = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  // funciones de direccionamiento para la funcionalidad de los botones

  const changeGameClueWord = ({ id, clue, word }) => {
    id = id ? id : 0;

    localStorage.setItem("id", id);
    localStorage.setItem("word", word);
    localStorage.setItem("clue", clue);
    dispatch({
      type: methods.CHANGE_GAME_CLUE_WORD,
      payload: { id, clue, word },
    });
  };

  const resetClueWord = () => {
    localStorage.setItem("id", 0);
    localStorage.setItem("word", "");
    localStorage.setItem("clue", "");
    dispatch({
      type: methods.RESET_CLUE_WORD,
    });
  };

  const setLastLetter = letter => {
    if (letter == "") localStorage.setItem("letter-array", JSON.stringify([]));
    
    if (/[a-zA-Z]/.test(letter) || letter === "") {
      dispatch({
        type: methods.SET_LAST_LETTER,
        payload: letter,
      });
    }
  };
  const setUsedLetter = ({ bool }) => {
    const change = typeof bool === "boolean" ? bool : true;
    dispatch({
      type: methods.SET_USED_LETTER,
      payload: { bool: change },
    });
  };
  const value = useMemo(
    () => ({
      state,
      home: state.system.home,
      addLetter: state.system.addLetter,
      game: state.game,
      gameSystem: state.system.game,
      word: state.game.word,
      clue: state.game.clue,
      id: state.game.id,
      lastLetter: state.game.lastLetter,
      colors: state.system.colors,
      usedLetter: state.game.usedLetter,
      setLastLetter,
      changeGameClueWord,
      resetClueWord,
      setUsedLetter,
    }),
    [state],
  );
  return (
    <contextGeneral.Provider value={value}>{children}</contextGeneral.Provider>
  );
};

export default Context;
