import React from "react";

export const useDetectedLetter = () => {
  const [tecla, setTecla] = React.useState("");

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const handleKeyDown = event => {
        try {
          const arrayLetterUsed = localStorage.getItem("letter-array");
          let arrayLetterUsedParsed = JSON.parse(arrayLetterUsed);
          if (!arrayLetterUsedParsed.includes(event.key)) {
            arrayLetterUsedParsed.push(event.key);
            const jsonLetterUsed = JSON.stringify(arrayLetterUsedParsed);
            localStorage.setItem("letter-array", jsonLetterUsed);
            setTecla(event.key);
          }
        } catch (error) {
          localStorage.setItem("letter-array", JSON.stringify([event.key]));
          setTecla(event.key);
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, []);

  return { letter: tecla };
};
