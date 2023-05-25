import { useContext, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { contextGeneral } from "@/services/context/general/context";
import style from "@/styles/addLetter.module.scss";
import Btn from "@/components/global/btn";

export const Buttons = ({ setHeightBtnRedirect, setModalVisible, setCurtain }) => {
  const { addLetter } = useContext(contextGeneral);
  const { btn, advertence } = addLetter;
  const router = useRouter();
  const refContainer = useRef(null);

  const cancel = () => {
    router.push("/");
  };
  const next = () => {
    setModalVisible(true);
    setCurtain(true);
  };
  const actions = { cancel: cancel, next: next };

  useEffect(() => {
    setHeightBtnRedirect(refContainer.current.offsetHeight);
  }, []);

  return (
    <>
      <article className={style.btn_container} ref={refContainer}>
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
                height={item.height} />
            ))
            : null}
        </div>
      </article>
    </>
  );
};
