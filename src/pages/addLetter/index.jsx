import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { contextGeneral } from "@/services/context/general/context";
import style from "@/styles/addLetter.module.scss";
import Logo from "@/components/global/logo";
import AddClue from "@/components/addLetter/addClue/addClue";
import FormAddPassword from "@/components/addLetter/FormAddPassword/formAddPassword";
import { Buttons } from "@/components/addLetter/buttons/buttons";

export default function Index() {
  const { addLetter } = useContext(contextGeneral);
  const { input } = addLetter;
  const [clue, setClue] = useState("");
  const [word, setWord] = useState("");
  const [curtain, setCurtain] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [heightBtnRedirect, setHeightBtnRedirect] = useState("");

  const changeText = e => {
    const limits = /[a-zA-Z]/;
    if (
      !limits.test(e.target.value[e.target.value.length - 1]) &&
      e.target.value[e.target.value.length - 1] != " "
    )
      e.target.value = word;

    setWord(e.target.value);
  };

  const curtainClick = () => {
    setCurtain(!curtain);
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <Logo />
      <motion.div
        layout
        className={style["bg-curtain"]}
        onClick={curtainClick}
        animate={{
          width: curtain ? "100%" : "0%",
          height: curtain ? "100%" : "0%",
        }}
      ></motion.div>

      <main className={style.main}>
        <FormAddPassword
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          clue={clue}
          word={word}
          setCurtain={setCurtain}
        />
        <section className={style.container_sections}>
          <article className={style.input_container}>
            <textarea placeholder={input.placeHolder} onChange={changeText} />
          </article>
          <AddClue setClue={setClue} heightBtnRedirect={heightBtnRedirect} />
          <Buttons
            setHeightBtnRedirect={setHeightBtnRedirect}
            setModalVisible={setModalVisible}
            setCurtain={setCurtain}
          />
        </section>
      </main>
    </>
  );
}
