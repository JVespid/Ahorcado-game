import { useContext, useEffect } from "react";
import Logo from "@/components/global/logo";

import PrintLetter from "@/components/game/printLetter/printLetter";
import GameFunctional from "@/components/game/gameFunctional/gameFunctional";
import style from "@/styles/game.module.scss";
import { useWinTheGame } from "@/services/hooks/useWinTheGame";
import { contextGeneral } from "@/services/context/general/context";
import ModalToWinOrLose from "@/components/game/modalToWinOrLose/modalToWinOrLose";
import Horca from "@/components/game/horca/horca";
import Clue from "@/components/game/clue/clue";

export default function Index() {
  const { lastLetter, word, clue } = useContext(contextGeneral);
  const { winierOrLoser,resetGame, result: winOrLose, attemptsUser } = useWinTheGame();

  useEffect(() => {
    if (lastLetter && lastLetter.trim()) {
      winierOrLoser({ letter: lastLetter, word });
    }
  }, [lastLetter]);

  return (
    <>
      <Logo />

      <ModalToWinOrLose winOrLose={winOrLose} resetGame={resetGame} />

      <main className={style.main}>
        <article className={style["horca-man"]}>
          <Horca attemptsUser={attemptsUser} />
        </article>

        <article>
          <Clue clue={clue}/>
        </article>

        <article className={style["inputs-letters"]}>
          <GameFunctional />
          <PrintLetter />
        </article>
      </main>
    </>
  );
}
