import React, { useEffect } from "react";
import Image from "next/image";
import style from "./horca.module.scss";
import { motion } from "framer-motion";

const imageLoader = ({ src }) => {
  return `https://jvespid.github.io/apis/ahorcado/${src}.png`;
};

const Horca = ({ attemptsUser }) => {
  const { attemptsToWin, count } = attemptsUser;
  let max = 0;

  const arrImgNames = [
    ["rostro"],
    ["brazoLeft", "cuerpo", "brazoRight"],
    ["pieLeft", "pieRight"],
  ];
  return (
    <>
      <div className={style["container-body"]}>
        {arrImgNames.map((imgNameArr, indexTop) => (
          <motion.div
            className={style["container-grups"]}
            key={"indexTop-" + indexTop}
            style={{width: `${100 * imgNameArr.length}px`}}
          >
            {imgNameArr.map((imgName, index) => {
              max++;
              if (max > count) return null;

              return (
                <motion.div
                  className={
                    style["content-img"] + " " + style["content-img-" + imgName]
                  }
                  key={`pictureHorca-${index}`}
                >
                  <Image
                    loader={imageLoader}
                    src={`${imgName}`}
                    alt={"picture the " + imgName}
                    className={style[imgName]}
                    width={100}
                    height={100}
                    priority={false}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Horca;
