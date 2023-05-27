import { useState, useEffect, useContext } from "react";

import { contextGeneral } from "@/services/context/general/context";

// version 1 - 2021-05-08 21:32 hook personalizado que usa el evento window.addEventListener('keyDown').
export const useDetectedLetterMovil = () => {
  const { setLastLetter, lastLetter } = useContext(contextGeneral);
  const [letterLast, setLetterLast] = useState("-");
  const [tecla, setTecla] = useState("");
  const limits = /[a-zA-Z]/;

  useEffect(() => {
    if (letterLast != lastLetter) {
      let letter = lastLetter.toLowerCase();

      if (limits.test(letter) && letter.length == 1) {
        try {
          const arrayLetterUsed = localStorage.getItem("letter-array");
          let arrayLetterUsedParsed = JSON.parse(arrayLetterUsed);

          if (!arrayLetterUsedParsed.includes(letter.toLowerCase())) {
            arrayLetterUsedParsed.push(letter.toLowerCase());
            const jsonLetterUsed = JSON.stringify(arrayLetterUsedParsed);
            localStorage.setItem("letter-array", jsonLetterUsed);
            setTecla(letter);

          }
        } catch (error) {
          localStorage.setItem("letter-array", JSON.stringify([letter]));
          setTecla(letter);
        }
      }
      setLetterLast(letter);

      return () => {
        localStorage.setItem("letter-array", JSON.stringify([]));
        setLastLetter("");
      };
    }
  }, [lastLetter]);

  return { letter: tecla };
};
