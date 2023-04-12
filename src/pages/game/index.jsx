import React, { useEffect } from "react";
import Btn from "../../components/global/btn";

import { useDetectedLetter } from "../../services/hooks/useDetectedLetter";
import Logo from "@/components/global/logo";
if (typeof window !== "undefined")
  localStorage.setItem("letter-array", JSON.stringify([]));

const Index = () => {
  const [tecla, setTecla] = React.useState("");
  const { letter } = useDetectedLetter();
  const hola = () => {
    console.log("hola");
  };

  useEffect(() => {}, []);

  return (
    <>
      <Logo />
      <div>
        Index {letter}
        <Btn
          value={"hola"}
          action={hola}
          type={"active"}
          width={"200px"}
          height={"100px"}
        ></Btn>
        <Btn value={"hola"} action={hola} type={"inactive"}></Btn>
      </div>
    </>
  );
};

export default Index;
