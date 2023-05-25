import { useContext, useEffect, useState } from "react";
import { useDetectedLetter } from "@/services/hooks/useDetectedLetter";
import { contextGeneral } from "@/services/context/general/context";
import style from "./printLetter.module.scss";

export default function PrintLetter() {
  const [tecla, setTecla] = useState([""]);
  const [is, setIs] = useState([false]);
  const { letter } = useDetectedLetter();
  const { setLastLetter, word, usedLetter } = useContext(contextGeneral);

  useEffect(() => {
    if (letter && letter.trim() && usedLetter) {
      setTecla([...tecla, letter]);
      setIs([...is, word.split("").includes(letter)]);
      setLastLetter(letter);
    }
  }, [letter]);

  return (
    <article className={style["get-letter"]}>
      <ul>
        {tecla
          ? tecla.map((item, index) => {
              if (item.trim())
                return (
                  <li
                    key={`item-${index}`}
                    className={
                      is[index] ? `${style["true"]}` : `${style["false"]}`
                    }
                  >
                    {item}
                  </li>
                );
            })
          : null}
      </ul>
    </article>
  );
}
