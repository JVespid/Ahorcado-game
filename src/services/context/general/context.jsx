import React, { createContext, useReducer, useMemo } from "react";
import { Reducer, methods } from "./reducer";

export const contextGeneral = createContext();

const initialState = {
  word: {},
  system: {
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
  },
};
const Context = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  // funciones de direccionamiento para la funcionalidad de los botones

  const updatePage = page => {
    let sumaPage = page + state.quiz.actualPage;
    let actualPage = state.quiz.actualPage;

    dispatch({
      type: methods.UPDATE_PAGE,
      payload: (page < 0 && actualPage > 0) || page > 0 ? sumaPage : actualPage,
    });
  };
  const value = useMemo(
    () => ({
      state,
      home: state.system.home,
      addLetter: state.system.addLetter,
    }),
    [state],
  );
  return (
    <contextGeneral.Provider value={value}>{children}</contextGeneral.Provider>
  );
};

export default Context;
