import { motion } from "framer-motion";
import style from "./btn.module.scss";
const Btn = ({ value, action, type, width, height }) => {
  const variant = type == "active" || type == "inactive" ? type : "inactive";
  const variants = {
    active: {
      width: width && typeof width == "string" ? width : "100%",
      height: height && typeof height == "string" ? height : "auto",
    },
    inactive: {
      width: width && typeof width == "string" ? width : "100%",
      height: height && typeof height == "string" ? height : "auto",
    },
  };
  return (
    <>
      <motion.button
        onClick={action}
        animate={variant}
        initial={variant}
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        type={variant}
        className={style[`btn-${variant}`]}
      >
        {value}
      </motion.button>
    </>
  );
};

export default Btn;
