import React from "react";
import { motion } from "framer-motion";

export default function Exit({ collapse, style, modalVisible }) {
  const [state, setState] = React.useState("close");

  React.useEffect(() => {
    if (modalVisible) setState("open");
    else setState("close");
  }, [modalVisible]);

  const line1 = {
    open: { rotate: -45, x: 5 },
    close: { rotate: 0, x: 0 },
  };
  const line2 = {
    open: { rotate: 45, x: -5 },
    close: { rotate: 0, x: 0 },
  };
  return (
    <motion.div
      className={style.exit}
      onClick={collapse}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div animate={state} variants={line1}></motion.div>
      <motion.div animate={state} variants={line2}></motion.div>
    </motion.div>
  );
}
