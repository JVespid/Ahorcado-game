import { useContext, useEffect, useState,useRef } from "react";
import { useRouter } from "next/router";
import { contextGeneral } from "../../services/context/general/context";
import style from "./../../styles/addLetter.module.scss";
import Btn from "@/components/global/btn";
import Logo from "@/components/global/logo";
import { useDBWords } from "@/services/hooks/useDBWords";
import AddClue from "@/components/addLetter/addClue";

const Index = () => {
  const { addLetter } = useContext(contextGeneral);
  const { input } = addLetter;
  const [clue, setClue] = useState("");
  const [word, setWord] = useState("");
  const [heightBtnRedirect, setHeightBtnRedirect] = useState("");
  const { getValue } = useDBWords();

  const changeText = e => {
    setWord(e.target.value);
  };
  const hola = async () => {
    const valuee = await getValue();
    console.log(valuee);
  };

  return (
    <>
      <Logo />
      <main className={style.main}>
        <div className={style.container_sections}>
          <section className={style.input_container}>
            <textarea placeholder={input.placeHolder} onChange={changeText} />
          </section>
          <AddClue setClue={setClue} heightBtnRedirect={heightBtnRedirect} />
          <Buttons
            word={word}
            clue={clue}
            setHeightBtnRedirect={setHeightBtnRedirect}
          />
        </div>
      </main>
    </>
  );
};

export default Index;

const Buttons = ({ word, clue, setHeightBtnRedirect }) => {
  const {} = useDBWords();
  const { addLetter } = useContext(contextGeneral);
  const { btn, advertence } = addLetter;
  const router = useRouter();
  const refContainer = useRef(null);

  const cancel = () => {
    router.push("/");
  };
  const next = () => {
    if (word.trim() && word.length > 2) {
      router.push("/");
    }
  };
  const actions = { cancel: cancel, next: next };

  useEffect(() => {
    setHeightBtnRedirect(refContainer.current.offsetHeight);
  }, []);

  return (
    <>
      <section className={style.btn_container} ref={refContainer}>
        <div className={style.advertence}>
          <p>{advertence.text}</p>
        </div>
        <div className={style.btn}>
          {btn
            ? btn.map((item, index) => (
                <Btn
                  key={"btn-" + index}
                  value={item.value}
                  type={item.type}
                  action={actions[item.action]}
                  width={item.width}
                  height={item.height}
                
                />
              ))
            : null}
        </div>
      </section>
    </>
  );
};
