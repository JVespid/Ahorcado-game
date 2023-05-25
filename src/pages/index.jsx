import Btn from "@/components/global/btn";
import { useRouter } from "next/router";
import { contextGeneral } from "@/services/context/general/context";
import { useContext } from "react";
import style from "./../styles/home.module.scss";
import Logo from "@/components/global/logo";

export default function Home() {
  const router = useRouter();

  const { home, setLastLetter, resetClueWord,setUsedLetter } = useContext(contextGeneral);
  const { btn } = home;
  const redirect = href => {
    setUsedLetter({ bool: true });
    setLastLetter("");
    resetClueWord();
    router.push(href);
  };
  return (
    <>
      <Logo />
      <main className={style.main}>
        <section>
          {btn
            ? btn.map((item, index) => (
                <Btn
                  key={"hola-" + index}
                  value={item.value}
                  type={item.type}
                  action={() => redirect(item.href)}
                  width={item.width}
                  height={item.height}
                />
              ))
            : null}
        </section>
      </main>
    </>
  );
}
