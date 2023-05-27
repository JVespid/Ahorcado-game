import { useState, useEffect, useContext } from "react";

import { contextGeneral } from "@/services/context/general/context";

// version 1 - 2021-05-08 21:32 hook personalizado que usa el evento window.addEventListener('keyDown').
export const useDetectedLetter = () => {
  const { setLastLetter } = useContext(contextGeneral);
  const [tecla, setTecla] = useState("");
  const limits = /[a-zA-Z]/;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleKeyDown = event => {
        let letter = event.key.toLowerCase();

        if (limits.test(letter) && letter.length == 1) {
          try {
            const arrayLetterUsed = localStorage.getItem("letter-array");
            let arrayLetterUsedParsed = JSON.parse(arrayLetterUsed);

            if (!arrayLetterUsedParsed.includes(letter)) {
              arrayLetterUsedParsed.push(letter);
              const jsonLetterUsed = JSON.stringify(arrayLetterUsedParsed);
              localStorage.setItem("letter-array", jsonLetterUsed);
              setTecla(letter);
            }
          } catch (error) {
            localStorage.setItem("letter-array", JSON.stringify([letter]));
            setTecla(letter);
          }
        }
      };
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        setLastLetter("");
        localStorage.setItem("letter-array", JSON.stringify([]));
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, []);

  return { letter: tecla };
};
