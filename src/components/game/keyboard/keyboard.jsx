import { useContext, useState } from "react";

import style from "./keyboard.module.scss";
import { contextGeneral } from "@/services/context/general/context";
import { motion } from "framer-motion";

export default function Keyboard() {
  const { setLastLetter } = useContext(contextGeneral);
  const [buttonStates, setButtonStates] = useState({});
  const [changeStyle, setChangeStyle] = useState("hidden");

  const handleClick = ({ letter }) => {
    setButtonStates(prevButtonStates => ({
      ...prevButtonStates,
      [letter]: true,
    }));
  };
  const keyboardAlphabet = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ñ"],
    ["z", "x", "c", "v", "b", "n", "m"],
  ];

  const variantContainerKeyBoard = {
    hidden: {
      opacity: 0,
      height: 0,
    },
    visible: {
      opacity: 1,
      height: "auto",
    },
  };
  const variantUp = {
    hidden: {
      rotate: "0deg",
      rotate: "0deg",
    },
    visible: {
      rotate: "180deg",
    },
  };

  return (
    <>
      <motion.div className={style["keyboard-container"]}>
        <motion.div className={style["btn-hidden"]}>
          <button
            layout
            whileHover={{ scale: 1.1 }}
            whileFocus={{ scale: 0.8 }}
            onClick={() =>
              changeStyle == "hidden"
                ? setChangeStyle("visible")
                : setChangeStyle("hidden")
            }
          > 
            <p>Teclado</p>
            <motion.div
              layout
              variants={variantUp}
              animate={changeStyle}
              initial={"hidden"}
              className={style["arrow-btn"]}
            >
              ^
            </motion.div>
          </button>
        </motion.div>
        <motion.div
          layout
          variants={variantContainerKeyBoard}
          animate={changeStyle}
          initial={"hidden"}
          className={style["keyboard"]}
        >
          {keyboardAlphabet.map((row, index) => (
            <div className="" key={"row-" + index}>
              <div className={style["fila"]}>
                {row.map((letter, index) => (
                  <motion.button
                    layout
                    whileHover={{ scale: 1.1 }}
                    whileFocus={{ scale: 0.8 }}
                    key={"letter-" + index}
                    disabled={buttonStates[letter]}
                    onClick={e => {
                      setLastLetter(letter);
                      handleClick({ letter });
                    }}
                    className="letter"
                  >
                    {letter}
                  </motion.button>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}
