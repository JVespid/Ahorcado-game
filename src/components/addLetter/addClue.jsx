import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import style from "./../../styles/AddClue.module.scss";

const AddClue = ({ setClue, heightBtnRedirect }) => {
  const [clueText, setClueText] = useState("");
  const refTextArea = useRef(null);
  const refBtn = useRef(null);
  const [state, setState] = useState("close");
  const [heightTextArea, setHeightTextArea] = useState(0);
  const [heightBtn, setHeightBtn] = useState(0);

  useEffect(() => {
    setHeightTextArea(refTextArea.current.offsetHeight);
    setHeightBtn(refBtn.current.offsetHeight);
  }, []);
  const changeClue = e => {
    setClue(clueText);
  };
  const changeClueText = e => {
    setClueText(e.target.value);
  };

  const changeAnimation = () => {
    if (state === "close") {
      setState("open");
    } else {
      setState("close");
    }
  };

  const section = {
    close: {
      y: heightBtnRedirect && heightBtn ? -(heightBtnRedirect + heightBtn) : 0,
    },
    open: {
      y: -(heightBtnRedirect + heightBtn + heightTextArea),
    },
  };

  const btn = {
    close: {
      borderColor: "rgba(0,0,0,0)",
    },
    open: {
      borderColor: "rgb(10, 56, 113)",
    },
  };
  const line1 = {
    open: { rotate: 0, x: -100 },
    close: { rotate: -45, x: -3 },
  };
  const line2 = {
    open: { rotate: 0, x: 100 },
    close: { rotate: 45, x: 3 },
  };
  const textH2 = {
    close: { opacity: 0, y: "100%", width: "0px" },
    open: { opacity: 1, y: "0%", width: "auto"  },
  };
  const textArea = {
    close: { opacity: 0 },
    open: { opacity: 1 },
  };

  return (
    <>
      <motion.section
        className={style.section}
        layout
        initial={"close"}
        animate={state}
        variants={section}
      >
        <motion.button
          onClick={changeAnimation}
          className={style.btnBurger}
          layout
          initial={"close"}
          animate={state}
          variants={btn}
          ref={refBtn}
        >
          <motion.div layout initial={"close"} animate={state}>
            <motion.div
              layout
              initial={"close"}
              animate={state}
              variants={line1}
            />
            <motion.h2
              layout
              initial={"close"}
              animate={state}
              variants={textH2}
            >
              {"ingresa la pista"}
            </motion.h2>
            <motion.div
              layout
              initial={"close"}
              animate={state}
              variants={line2}
            />
          </motion.div>
        </motion.button>
        <motion.textarea
          placeholder="Escribe una pista"
          onChange={changeClueText}
          ref={refTextArea}
          layout
          initial={"close"}
          animate={state}
          variants={textArea}
        />
      </motion.section>
    </>
  );
};

export default AddClue;
