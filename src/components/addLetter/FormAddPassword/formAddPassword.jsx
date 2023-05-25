import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import style from "./formAddPassword.module.scss";
import Exit from "./exit/exit";
import Btnx from "./btn/btn";
import { useDBWords } from "@/services/hooks/useDBWords";
import { contextGeneral } from "@/services/context/general/context";

export default function FormAddPassword({
  setModalVisible,
  modalVisible,
  word,
  clue,
  setCurtain,
}) {
  const { game, changeGameClueWord, resetClueWord, setLastLetter } =
    useContext(contextGeneral);
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { addValue } = useDBWords();

  const ContinueAnyPassword = () => {
    if (word.trim() && word.length > 2) {
      changeGameClueWord({ clue, word, id:0 });
      setLastLetter("");
      router.push("/game");
    }
  };
  const ContinueWithPassword = async () => {
    if (word.trim() && word.length > 2 && password.trim()) {
      const { result } = await addValue({ clue, word, password });
      if (result.status === 200) {
        changeGameClueWord({ clue, word });
        setLastLetter("");
        router.push("/game");
      }
    }
  };
  const changePassword = e => {
    setPassword(e.target.value);
  };

  const collapse = () => {
    setModalVisible(false);
    setCurtain(false);
  };

  return (
    <>
      <motion.aside
        style={{ display: modalVisible ? "inline-block" : "none" }}
        className={style.aside}
      >
        <Exit collapse={collapse} style={style} modalVisible={modalVisible} />
        <div className={style.container}>
          <div className={style.other}>
            <h2>{"ingresa la contraseña"}</h2>
            <motion.input
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              whileFocus={{ scale: 1.1 }}
              placeholder="*********"
              type="password"
              name="password"
              onChange={changePassword}
            />
          </div>
          <Btnx
            ContinueAnyPassword={ContinueAnyPassword}
            ContinueWithPassword={ContinueWithPassword}
            style={style.btn}
          />
        </div>
      </motion.aside>
    </>
  );
}

// 01234
