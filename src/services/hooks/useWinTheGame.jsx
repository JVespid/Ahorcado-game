import { useState } from "react";

export const useWinTheGame = () => {
  const [arrLettersCorrect, setArrLettersCorrect] = useState([]);
  const [count, setCount] = useState(0);
  const [result, setResult] = useState("playing"); // ["playing", "win", "lose"]
  const [wordHook, setWordHook] = useState("");
  const attemptsToWin = 5; // inicia a contar desde 0

  const winierOrLoser = ({ letter, word }) => {
    if (letter && word && typeof window !== "undefined") {
      let arrLetterFilter = new Set(),
        isLetterCorrect = false;
      if (arrLettersCorrect.length == 0 || wordHook != word) {
        arrLetterFilter = new Set(
          word.split("").filter(letter => letter != " "),
        );
        setWordHook(word);
      } else arrLetterFilter = arrLettersCorrect;

      if (arrLetterFilter.has(letter)) {
        arrLetterFilter.delete(letter);
        setArrLettersCorrect(arrLetterFilter);
        isLetterCorrect = true;
      }
      if (arrLetterFilter.size == 0) {
        setResult(winTheGame());
      }

      if (count >= attemptsToWin && !isLetterCorrect) {
        setResult(loseTheGame());
      }
      if (!isLetterCorrect) setCount(count + 1);
    }
  };
  const winTheGame = () => {
    return "win";
  };

  const loseTheGame = () => {
    return "lose";
  };

  const resetGame = () => {
    setResult("playing");
  };

  return {
    resetGame,
    winierOrLoser,
    result,
    attemptsUser: { count, attemptsToWin },
  };
};
