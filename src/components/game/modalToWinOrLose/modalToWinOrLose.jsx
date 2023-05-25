import { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import style from "./modalToWinOrLose.module.scss";
import { contextGeneral } from "@/services/context/general/context";
import Btn from "@/components/global/btn";

// receives as parameters one of these three: ["playing", "win", "lose"]
export default function ModalToWinOrLose({ winOrLose, resetGame }) {
  const { colors, gameSystem, setUsedLetter, resetClueWord, setLastLetter } =
    useContext(contextGeneral);
  const { modalWinOrLose } = gameSystem;
  const { titles, messages, buttons } = modalWinOrLose;

  const tryAgain = () => {
    resetClueWord();
    setLastLetter("");
    setUsedLetter({ bool: true });
    resetGame();

    location.reload();
  };

  useEffect(() => {
    if (winOrLose != "playing") {
      setUsedLetter({ bool: false });
    }
  }, [winOrLose]);

  const variantBg = {
    playing: {
      color: colors.transparent,
    },
    win: {
      color: colors.white_secondary,
    },
    lose: {
      color: colors.white_secondary,
    },
  };
  const variantMessage = {
    playing: {
      width: "0ch",
    },
    win: {
      width: `auto`,
    },
    lose: {
      width: `auto`,
    },
  };

  const variantTitle = {
    playing: {
      width: "0ch",
    },
    win: {
      color: colors.correct_primary,
      width: "auto",
    },
    lose: {
      color: colors.white_tertiary,
      width: "auto",
    },
  };

  return (
    <>
      <AnimatePresence>
        {winOrLose != "playing" && (
          <motion.div
            layout
            variants={variantBg}
            animate={winOrLose}
            initial={"playing"}
            className={style["modal-bg"]}
          >
            <div className={style["title-container"]}>
              <motion.h2
                layout
                variants={variantTitle}
                animate={winOrLose}
                initial={"playing"}
                className={style["modal-message"]}
                transition={{ duration: 1.5, delay: 0.5 }}
              >
                {titles[`${winOrLose}`]}
              </motion.h2>
            </div>
            <div className={style["messages-container"]}>
              {messages[`${winOrLose}`] &&
                messages[`${winOrLose}`].map((msg, index) => (
                  <motion.p
                    key={"msg-" + index}
                    layout
                    variants={variantMessage}
                    animate={winOrLose}
                    initial={"playing"}
                    className={style["modal-message"]}
                    transition={{ duration: 3, delay: 1 }}
                  >
                    {msg}
                  </motion.p>
                ))}
            </div>
            <div className={style["btn-container"]}>
              <Btn
                value={buttons[`${winOrLose}`]}
                type={winOrLose == "win" ? "active" : "inactive"}
                action={tryAgain}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
