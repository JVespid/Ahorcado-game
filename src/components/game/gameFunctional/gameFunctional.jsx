import { useContext, useEffect, useRef, useState } from "react";
import { contextGeneral } from "@/services/context/general/context";
import style from "./gameFunctional.module.scss";
import hookNewWord from "./hookNewWord/hookNewWord";
import Load from "../load/load";

export default function GameFunctional() {
  let resLetter = 0;
  const { lastLetter, word, id } = useContext(contextGeneral);

  const refInputs = useRef([]);
  refInputs.current = [];

  hookNewWord();

  useEffect(() => {
    console.log({ word });
  }, [word]);

  useEffect(() => {
    if ((refInputs.current.length = word.length - resLetter)) {
      const arrLetterFilter = word.split("").filter(letter => letter != " ");
      arrLetterFilter.forEach((letter, index) => {
        if (letter.toLowerCase() == lastLetter) {
          refInputs.current[index].value = letter;
          refInputs.current[index].className += " " + style["letter-correct"];
        }
      });
    }
  }, [lastLetter]);

  const cancelFunctionality = event => {
    if (
      !(
        event.ctrlKey ||
        event.altKey ||
        event.metaKey ||
        event.shiftKey ||
        event.key == "Enter" ||
        event.key == "Tab"
      )
    )
      event.preventDefault();
  };

  const fillOutRefInputs = event => {
    if (event && !refInputs.current.includes(event)) {
      refInputs.current.push(event);
    }
  };

  return (
    <>
      <section className={style["inputs"]}>
        {word && word.trim() ? (
          word.split("").map((letterMap, index) => {
            if (letterMap == " ") {
              resLetter++;
              return (
                <div
                  key={`id:${id}-index:${index}`}
                  className={
                    style["space-between-letters"] + " " + style["letters-word"]
                  }
                ></div>
              );
            }

            return (
              <input
                type="text"
                key={`id:${id}-index:${index}`}
                placeholder={index - resLetter + 1}
                className={
                  style["inputs-letters"] + " " + style["letters-word"]
                }
                onKeyDown={cancelFunctionality}
                ref={fillOutRefInputs}
                disabled={true}
              />
            );
          })
        ) : (
          <Load />
        )}
      </section>
    </>
  );
}
