import React from "react";
import style from "./clue.module.scss";
import { motion } from "framer-motion";

export default function Clue({ clue }) {
  const msg = clue ? "mostrar pista" : "No hay pista";
  const [show, setShow] = React.useState(false);

  const p = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const Showed = () => {
    if (show) {
    } else {
    }
    setShow(!show);
  };

  return (
    <>
      <section className={style["container-clue"]}>
        <div className={style["h2-container"]}>
          <motion.p
            layout
            variants={p}
            animate={show ? "visible" : "hidden"}
            initial={show ? "visible" : "hidden"}
            className={style["title-clue"]}
          >
            {clue}
          </motion.p>
        </div>
        <motion.button
          whileHover={{ scale: 1.12 }}
          whileFocus={{ scale: 0.8 }}
          className={style["btn-clue"]}
          onClick={Showed}
        >
          {msg}
        </motion.button>
      </section>
    </>
  );
}
