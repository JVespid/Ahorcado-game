import { useContext, useEffect, useRef, useState } from "react";
import { contextGeneral } from "@/services/context/general/context";
import { useDBWords } from "@/services/hooks/useDBWords";
import { useRouter } from "next/router";

export default function hookNewWord() {
  const Router = useRouter();
  const { word, changeGameClueWord } = useContext(contextGeneral);
  const { getValueRandom } = useDBWords();
  const initialIt = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const wordL = localStorage.getItem("word");
        if (wordL == null || wordL == undefined) {
          localStorage.setItem("id", 0);
          localStorage.setItem("word", "");
          localStorage.setItem("clue", "");
        }
        const w = localStorage.getItem("word");
        const c = localStorage.getItem("clue");
        const i = localStorage.getItem("id");

        
        if (!(w && w.trim()) && !(word && word.trim())) {
          if (!initialIt.current) {
            initialIt.current = true;
            getValueRandom().then(({ result }) => {
              const { id, word, clue } = result.data;
              localStorage.setItem("id", id);
              localStorage.setItem("word", word);
              localStorage.setItem("clue", clue);
              changeGameClueWord({ id, word, clue });
            });
          }
        } else changeGameClueWord({ id: i, word: w, clue: c });
      } catch (error) {
        Router.push({
          pathname: "/",
          query: {
            messageAdmin: "undefined error, clear cache to try again later",
            error,
          },
        });
      }
    }
  }, []);
}
